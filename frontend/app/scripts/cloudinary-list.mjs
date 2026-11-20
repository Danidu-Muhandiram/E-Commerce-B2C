// lists all images under veloura/ grouped by folder
// run: node --env-file=.cloudinary.local scripts/cloudinary-list.mjs

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    console.error('Missing keys. Add them to .cloudinary.local');
    process.exit(1);
}

const auth = Buffer.from(`${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}`).toString('base64');
const base = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/resources/image/upload`;

const resources = [];
let cursor;

do {
    const params = new URLSearchParams({ prefix: 'veloura/', max_results: '500' });
    if (cursor) params.set('next_cursor', cursor);

    const res = await fetch(`${base}?${params}`, { headers: { Authorization: `Basic ${auth}` } });
    if (!res.ok) {
        console.error(`Cloudinary error ${res.status}: ${await res.text()}`);
        process.exit(1);
    }
    const data = await res.json();
    resources.push(...data.resources);
    cursor = data.next_cursor;
} while (cursor);

const folders = {};
for (const r of resources) {
    const i = r.public_id.lastIndexOf('/');
    const folder = r.public_id.slice(0, i);
    (folders[folder] ??= []).push({ name: r.public_id.slice(i + 1), width: r.width, height: r.height, version: r.version });
}

console.log(JSON.stringify(folders, null, 2));
console.error(`${resources.length} images in ${Object.keys(folders).length} folders`);

// Builds Cloudinary delivery URLs from a public ID. Only the public ID is stored
// in product data; size, crop and format are decided here at render time.

const CLOUD_NAME = 'dm-assets';
const BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

// The source images carry a small mark in the bottom-right corner. Keeping the
// top-left 90% of the frame removes it before any other crop is applied.
const TRIM_MARK = 'c_crop,w_0.9,h_0.9,g_north_west';

// Public IDs may contain spaces (folder names), so encode each path segment.
const encodeId = (publicId) => publicId.split('/').map(encodeURIComponent).join('/');

/**
 * @param {string} publicId
 * @param {object} [opts]
 * @param {number} [opts.width=800]   output width in px
 * @param {string} [opts.ratio='4:5'] aspect ratio, or null to keep the original
 * @param {boolean} [opts.trim=true]  remove the corner mark
 */
export const cldUrl = (publicId, { width = 800, ratio = '4:5', trim = true, version } = {}) => {
    // With a ratio: crop to it, keeping the subject in frame. Without: just scale
    // down (never up), keeping the photo's own framing.
    const crop = ratio ? ['c_fill', `ar_${ratio}`, 'g_auto'] : ['c_limit'];
    const resize = [...crop, `w_${width}`, 'f_auto', 'q_auto'].join(',');
    const steps = [trim && TRIM_MARK, resize].filter(Boolean).join('/');
    // version busts the browser cache when an image is replaced
    const v = version ? `v${version}/` : '';
    return `${BASE}/${steps}/${v}${encodeId(publicId)}`;
};

const WIDTHS = [400, 600, 800, 1200, 1600];

export const cldSrcSet = (publicId, opts = {}) =>
    WIDTHS.map((w) => `${cldUrl(publicId, { ...opts, width: w })} ${w}w`).join(', ');

/**
 * src/srcSet/sizes for an editorial photo (hero, category, campaign images):
 * original framing, no corner trim. Spread onto an <img>.
 */
export const editorialImg = (publicId, sizes = '100vw', version) => {
    const opts = { ratio: null, trim: false, version };
    return { src: cldUrl(publicId, { ...opts, width: 1200 }), srcSet: cldSrcSet(publicId, opts), sizes };
};

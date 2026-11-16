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
export const cldUrl = (publicId, { width = 800, ratio = '4:5', trim = true } = {}) => {
    const resize = ['c_fill', ratio && `ar_${ratio}`, 'g_auto', `w_${width}`, 'f_auto', 'q_auto']
        .filter(Boolean)
        .join(',');
    const steps = [trim && TRIM_MARK, resize].filter(Boolean).join('/');
    return `${BASE}/${steps}/${encodeId(publicId)}`;
};

const WIDTHS = [400, 600, 800, 1200, 1600];

export const cldSrcSet = (publicId, opts = {}) =>
    WIDTHS.map((w) => `${cldUrl(publicId, { ...opts, width: w })} ${w}w`).join(', ');

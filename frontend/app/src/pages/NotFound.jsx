import { Link } from 'react-router-dom';

const NotFound = () => (
    <section className="bg-fashion-eggshell px-4 py-28 text-center">
        <p className="text-sm font-medium tabular-nums text-fashion-moss">404</p>
        <h1 className="mt-3 font-playfair text-4xl md:text-5xl tracking-tight text-fashion-black">
            This page has <em className="italic text-fashion-moss">wandered off.</em>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-fashion-black/70">
            The link may be old, or the piece is no longer available.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link
                to="/shop"
                className="bg-fashion-moss px-7 py-3.5 text-sm font-medium text-fashion-eggshell transition-colors hover:bg-fashion-black"
            >
                Shop all
            </Link>
            <Link
                to="/"
                className="text-sm font-medium text-fashion-black underline decoration-fashion-black/30 underline-offset-[6px] hover:decoration-fashion-black"
            >
                Back to home
            </Link>
        </div>
    </section>
);

export default NotFound;

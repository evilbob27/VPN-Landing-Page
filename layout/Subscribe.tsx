const Subscribe = () => {
    return (
        <section className="flex flex-row justify-between items-center mx-80 rounded-xl border border-red-600 py-12 px-16 mt-20">
            <article>
                <h2 className="text-4xl font-medium leading-spaced">Subscribe Now for <br />
                    Get Special Features!</h2>
                <p className="text-slate-700 mt-3">Let&apos;s subscribe with us and find the fun.</p>
            </article>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold rounded-xl px-16 py-5">
                Subscribe Now
            </button>
        </section>
    );
}

export default Subscribe;
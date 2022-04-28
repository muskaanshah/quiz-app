function Navbar() {
    return (
        <div className="h-16 shadow-md shadow-emerald-600/50 sticky top-0 flex items-center px-4 z-10 left-0 right-0 bg-skin-fill">
            <div className="text-skin-primarylight text-2xl grow">NEW</div>
            <div className="flex items-center gap-6">
                <button>
                    <span className="material-icons">light_mode</span>
                </button>
                <button>
                    <span className="material-icons">emoji_events</span>
                </button>
                <button>
                    <span className="material-icons">person</span>
                </button>
            </div>
        </div>
    );
}

export { Navbar };

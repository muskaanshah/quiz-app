function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`;
        }
        return `rgb(var(${variableName}))`;
    };
}

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            textColor: {
                skin: {
                    base: withOpacity("--color-text-base"),
                    muted: withOpacity("--color-text-muted"),
                    inverted: withOpacity("--color-text-inverted"),
                    fill: withOpacity("--color-fill"),
                    fillmuted: withOpacity("--color-fill-muted"),
                    primary: withOpacity("--color-primary"),
                    primaryhover: withOpacity("--color-primary-hover"),
                    primarylight: withOpacity("--color-primary-light"),
                },
            },
            backgroundColor: {
                skin: {
                    base: withOpacity("--color-text-base"),
                    muted: withOpacity("--color-text-muted"),
                    inverted: withOpacity("--color-text-inverted"),
                    fill: withOpacity("--color-fill"),
                    fillmuted: withOpacity("--color-fill-muted"),
                    primary: withOpacity("--color-primary"),
                    primaryhover: withOpacity("--color-primary-hover"),
                    primarylight: withOpacity("--color-primary-light"),
                },
            },
            border: {
                skin: {
                    base: withOpacity("--color-text-base"),
                },
            },
            fontFamily: {
                basic: ["Catamaran", "sans-serif"],
            },
            colors: {
                primary: "#059669",
            },
        },
    },
    plugins: [],
};

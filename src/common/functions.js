export function inArray(needle, haystack = []) {
    if (haystack.length > 0) {
        let length = haystack.length;
        for (let i = 0; i < length; i++) {
            if (haystack[i] === needle) return true;
        }
    }
    return false;
}
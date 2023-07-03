
/*function isBackNavigation(navigateEvent: any) {
    if (navigateEvent.navigationType === 'push' || navigateEvent.navigationType === 'replace') {
        return false;
    }
    if (
        navigateEvent.destination.index !== -1 &&
        //@ts-ignore
        navigateEvent.destination.index < navigation.currentEntry.index
    ) {
        return true;
    }
    return false;
}

// Intercept navigations
// https://developer.chrome.com/docs/web-platform/navigation-api/
// This is a naive usage of the navigation API, to keep things simple.
export async function onLinkNavigate(callback: any) {
    //@ts-ignore
    navigation.addEventListener('navigate', (event) => {
        const toUrl = new URL(event.destination.url);

        if (location.origin !== toUrl.origin) return;

        const fromPath = location.pathname;
        const isBack = isBackNavigation(event);

        event.intercept({
            async handler() {
                if (event.info === 'ignore') return;

                await callback({
                    toPath: toUrl.pathname,
                    fromPath,
                    isBack,
                });
            },
        });
    });
}*/

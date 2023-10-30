import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
    root: path.join(__dirname, 'docs'),
    base: "/algorithm-station-rspress/",
    title: 'DawnMagnet\'s Algorithm Station',
    description: 'DawnMagnet\'s Algorithm Station.',
    icon: "/rspress-icon.png",
    logo: {
        light: "/rspress-light-logo.png",
        dark: "/rspress-dark-logo.png",
    },
    themeConfig: {
        socialLinks: [
            { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
        ],
    },
});

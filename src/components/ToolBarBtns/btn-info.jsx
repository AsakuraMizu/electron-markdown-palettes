import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'info',
    icon: faInfoCircle,
    title: '关于',
    action () {
        this.openDialog({
            title: '关于',
            type: 'component',
            body: [{
                functional: true,
                render: (h, { injections: {t} }) =>
                    <div style="text-align: center">
                        <p>
                            <strong>{ t('Markdown*Palettes') }</strong> { t('是一个开源的 Markdown 编辑器，面向现代化网络环境。') }
                        </p>
                        <p>
                            <a href="https://github.com/luogu-dev/markdown-palettes" target="_blank">{ t('访问 Markdown*Palettes GitHub 项目地址') }</a>
                        </p>
                        <p>
                            <strong>{ t('Electron Markdown*Palettes') }</strong> { t('是一个基于 Markdown*Palettes 的开源跨平台 Markdown 编辑器。') }
                        </p>
                        <p>
                            <a href="https://github.com/water-lift/markdown-palettes" target="_blank">{ t('访问 Electron Markdown*Palettes GitHub 项目地址') }</a>
                        </p>
                    </div>,
                inject: ['t']
            }]
        })
    }
}

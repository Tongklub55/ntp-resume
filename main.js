
const cv = document.getElementById('download')
    cv.addEventListener('click', (e) => {
    e.preventDefault()

    const fileUrl = 'cv.pdf'
    const fileName = 'cv_nattapong_kitpitak.pdf'

    const link = document.createElement('a')
    link.href = fileUrl
    link.download = fileName
    link.click();
    })

const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {

            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills__active')
            })

            target.classList.add('skills__active')

            tabs.forEach(tab => {
                tab.classList.remove('skills__active')
            })

            tab.classList.add('skills__active')
        })
    })
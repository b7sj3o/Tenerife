// const selectLangMobile = document.getElementById('select-language_mobile')

selectLangMobile.addEventListener('change', changeURLLanguageMobile)

function changeURLLanguageMobile() {
    let currentLang = selectLangMobile.value
    location.href = window.location.pathname + '#' + currentLang;
    location.reload()
    changeLanguageMobile()
}

function changeLanguageMobile() {
    let hash = window.location.hash;
    hash = hash.slice(1)
    
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ua'
        location.reload()
    }
    selectLangMobile.value = hash;
    selectLang.value = hash;
    document.querySelector('title').innerHTML = dictLang['title'][hash]
    for (let key in dictLang) {
        try {
            let word = document.querySelectorAll('.lang-'+key)
            if (word.length > 1 && word) {
                for (let i of word) {
                    i.innerHTML = dictLang[key][hash]
                }
            } else if (word){
                let word = document.querySelector('.lang-'+key)
                word.innerHTML = dictLang[key][hash]
            }
        } catch (error) {
            continue;
        }
        
    }
}

changeLanguageMobile()

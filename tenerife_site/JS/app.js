const selectLang = document.getElementById('select-language')
const selectLangMobile = document.getElementById('select-language_mobile')
let hash = 'ua'
const allLang = ['ua', 'en', 'ru', 'est']
let currentLang = '#ua';
selectLang.addEventListener('change', changeURLLanguage)

function changeURLLanguage() {
    currentLang = selectLang.value
    location.href = window.location.pathname + '#' + currentLang;
    location.reload()
    changeLanguage()
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.slice(1)
    
    if (!allLang.includes(hash) || location.href.includes('?')) {
        location.href = window.location.pathname + currentLang;
        setTimeout(function() {
            location.reload();
        }, 100);    
    }
    selectLang.value = hash;
    selectLangMobile.value = hash;
    document.querySelector('title').innerHTML = dictLang['title'][hash]
    for (let key in dictLang) {
        try {
            let word = document.querySelectorAll('.lang-'+key)
            if (word.length > 1 && word) {
                for (let i of word) {
                    i.innerHTML = dictLang[key][hash]
                }
            } else {
                let word = document.querySelector('.lang-'+key)
                word.innerHTML = dictLang[key][hash]
            }
        } catch (error) {
            continue;
        }
        
    }
}


changeLanguage()

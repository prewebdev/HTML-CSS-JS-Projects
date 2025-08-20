const fileEl = document.querySelector('input');
const formEl = document.querySelector('form');
const textareaEl = document.querySelector('textarea');

formEl.addEventListener('click', ()=>{
    fileEl.click();
});

fileEl.addEventListener('change', (e)=>{
    let file = e.target.files[0];
    if(file === undefined) return;
    let formData = new FormData();
    formData.append('file', file);
    fetch('https://api.qrserver.com/v1/read-qr-code/', 
        {method:'POST', body:formData})
        .then(res => res.json())
        .then(rs=>{
            console.log('API Response:', rs);
        let symbol = rs[0].symbol[0];
        if(symbol.error !== null) {
            textareaEl.value = '\u274c' + symbol.error;
        } else {
            textareaEl.value = symbol.data;
        }
    })
    .catch(err => {
        console.error('Fetch error:', err);
        textareaEl.value = 'Network / Fetch error!';
    });

    let reader = new FileReader();
    reader.onload = ()=>{
        let img = document.querySelector('#img');
        img.src= reader.result;
    };
    reader.readAsDataURL(file);
});

const clipboardEl = document.querySelector('.data a');
clipboardEl.addEventListener('click', ()=>{
    if(!textareaEl.value) return;
    clipboardEl.innerHTML = '<span class="material-symbols-outlined">check</span>';
    navigator.clipboard.writeText(textareaEl.value);
    setTimeout(()=> {
        clipboardEl.innerHTML = '<span class="material-symbols-outlined">content_copy</span>';
    }, 2000)
})
var section =  document.getElementsByTagName('section');

for (var i = 0; i<section.length;i++){
    if(section[i].id =='lingkaran'){
        var lingkaran = section[i]
    }else if(section[i].id == 'persegi'){
        var persegi = section[i];
    }else if(section[i].id == 'persegiPanjang'){
        var persegiPanjang = section[i];
    }
}

function showLingkaran(){
    if(lingkaran.classList.contains('hidden')){
        lingkaran.classList.remove('hidden');
        lingkaran.scrollIntoView({behavior: 'smooth'});
    }else{
        lingkaran.classList.add('hidden');
    }
    persegi.classList.add('hidden');
    persegiPanjang.classList.add('hidden');
    var result = document.getElementById('result');
    result.innerHTML = '';
    
}
function showPersegi(){
    if(persegi.classList.contains('hidden')){
        persegi.classList.remove('hidden');
        persegi.scrollIntoView({behavior: 'smooth'});
    }else{
        persegi.classList.add('hidden');
    }
    lingkaran.classList.add('hidden');
    persegiPanjang.classList.add('hidden');
    var result = document.getElementById('result');
    result.innerHTML = '';
}
function showPersegiPanjang(){
    if(persegiPanjang.classList.contains('hidden')){
        persegiPanjang.classList.remove('hidden');
        persegiPanjang.scrollIntoView({behavior: 'smooth'});
    }else{
        persegiPanjang.classList.add('hidden');
    }
    lingkaran.classList.add('hidden');
    persegi.classList.add('hidden');
    var result = document.getElementById('result');
    result.innerHTML = '';
}

function hitungLingkaran(event){
    var r = document.getElementById('jari').value
    event.preventDefault()
    var luas = (Math.PI * Math.pow(r,2));
    var keliling = (2 * Math.PI * r);
    
    var resultText = `<p>Luas lingkaran = ${Math.PI} * ${r} * ${r}</p>
                  <p>Luas lingkaran = ${luas}</p>
                  <br>
                  <p>Keliling Lingkaran = 2 * ${Math.PI} * ${r}</p>
                  <p>Keliling Lingkaran = ${keliling}</p>`

    var result = document.getElementById('result');
    result.innerHTML = '';
    result.innerHTML = resultText;
    result.scrollIntoView({behavior: 'smooth'});
}
function hitungPersegi(event){
    var r = document.getElementById('sisi').value
    event.preventDefault()
    var luas = r * r;
    var keliling = 4 * r;
    
    var resultText = `<p>Luas Persegi = ${r} * ${r}</p>
                  <p>Luas Persegi = ${luas}</p>
                  <br>
                  <p>Keliling Persegi = 4 * ${r}</p>
                  <p>Keliling Persegi = ${keliling}</p>`
    var result = document.getElementById('result');
    result.innerHTML = '';
    result.innerHTML = resultText;
    result.scrollIntoView({behavior: 'smooth'});
}
function hitungPersegiPanjang(event){
    var p = document.getElementById('panjang').value
    var l = document.getElementById('lebar').value
    event.preventDefault()
    var luas = p * l;
    var keliling = ( 2 * p ) + ( 2 * l );
    
    var resultText = `<p>Luas Persegi Panjang =  ${p} * ${l}</p>
                  <p>Luas Persegi Panjang = ${luas}</p>
                  <br>
                  <p>Keliling Persegi Panjang = 2 * (${p} + ${l})</p>
                  <p>Keliling Persegi Panjang = ${keliling}</p>`

    var result = document.getElementById('result');
    result.innerHTML = '';
    result.innerHTML = resultText;
    result.scrollIntoView({behavior: 'smooth'});

}
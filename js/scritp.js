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
    
}

function hitungLingkaran(r){
    var luas = (Math.PI * Math.pow(r,2));
    var keliling = (2 * Math.PI * r);
    console.log(keliling);
}
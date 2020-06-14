document.getElementById('micsquiz1').addEventListener('click', function(){alert('Jawabannya Tabel adalah daftar yang berisikan sejumlah data atau informasi yang biasanya berupa kata-kata maupun angka yang didalamnya tersusun secara sistematis dan saling terkait.');});

document.getElementById('micsquiz2').addEventListener('click', function(){alert('Jawabannya adalah Tujuannya agar si pemberi informasi dapat memberikan informasi secara ringkas sekaligus mempermudah si pembaca dalam memahami informasi.');});

document.getElementById('micsquiz3').addEventListener('click', function(){alert('Jawabannya adalah menu border dan selanjutnya pilih All Border');});


var s = ""
for (var i=0 ; i <= 5 ; i++){
    for (var j=0; j <= i ; j++){
        s += "*"
    }
    s += "\n"
}
console.log(s)

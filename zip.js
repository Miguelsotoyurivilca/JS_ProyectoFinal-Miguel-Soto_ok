const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream('js_proyectofinal_MiguelSoto_ok.zip');
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', function () {
    console.log(`Archivo zip creado: ${archive.pointer()} bytes`);
});

archive.pipe(output);
archive.directory('bar-vietnamita/', false);
archive.finalize();

# unduh-foto.ps1
# Jalankan script ini dari folder proyek: .\unduh-foto.ps1
# Butuh koneksi internet.

$plants = @(
    @{
        name   = "kunyit"
        url    = "https://upload.wikimedia.org/wikipedia/commons/5/5b/Curcuma_longa_roots.jpg"
        credit = "Simon A. Eugster, CC BY-SA 3.0, Wikimedia Commons"
    },
    @{
        name   = "jahe-merah"
        url    = "https://upload.wikimedia.org/wikipedia/commons/3/3d/Ginger_rhizome.jpg"
        credit = "Mk2010, CC BY-SA 4.0, Wikimedia Commons"
    },
    @{
        name   = "serai"
        url    = "https://upload.wikimedia.org/wikipedia/commons/b/b0/Lemongrass_%28Cymbopogon_citratus%29.jpg"
        credit = "Mokkie, CC BY-SA 4.0, Wikimedia Commons"
    },
    @{
        name   = "temulawak"
        url    = "https://upload.wikimedia.org/wikipedia/commons/c/c9/Temulawak.jpg"
        credit = "Herusutimbul, CC BY-SA 4.0, Wikimedia Commons"
    }
)

$dir = "public\plants"
if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }

foreach ($p in $plants) {
    $dest = "$dir\$($p.name).jpg"
    if (Test-Path $dest) {
        Write-Host "  [SKIP] $($p.name).jpg sudah ada" -ForegroundColor Yellow
        continue
    }
    Write-Host "Mengunduh $($p.name)..." -NoNewline
    try {
        Invoke-WebRequest -Uri $p.url -OutFile $dest -UseBasicParsing -TimeoutSec 60
        $size = (Get-Item $dest).Length / 1KB
        Write-Host " OK ($([math]::Round($size)) KB) · Kredit: $($p.credit)" -ForegroundColor Green
    }
    catch {
        Write-Host " GAGAL: $_" -ForegroundColor Red
        Write-Host "  Unduh manual dari: $($p.url)" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "Selesai. Jalankan 'npm run dev' untuk melihat hasilnya." -ForegroundColor Cyan

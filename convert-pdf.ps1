Add-Type -AssemblyName System.Drawing
[Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null

function Await($asyncOp) {
    while ($asyncOp.Status -eq [Windows.Foundation.AsyncStatus]::Started) {
        Start-Sleep -Milliseconds 20
    }
    return $asyncOp.GetResults()
}

$pdfPath = "C:\Users\asus\OneDrive\Desktop\PORTFOLIO\portfolio-site\public\smart-gate-pass-presentation.pdf"
$outDir = "C:\Users\asus\OneDrive\Desktop\PORTFOLIO\portfolio-site\public\project-3-slides"

$storageFile = Await ([Windows.Storage.StorageFile]::GetFileFromPathAsync($pdfPath))
$pdfDoc = Await ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($storageFile))

Write-Host "Total Pages: $($pdfDoc.PageCount)"

for ($i = 0; $i -lt $pdfDoc.PageCount; $i++) {
    $page = $pdfDoc.GetPage($i)
    $renderOptions = New-Object Windows.Data.Pdf.PdfPageRenderOptions
    $renderOptions.DestinationWidth = 1920
    
    $memStream = New-Object Windows.Storage.Streams.InMemoryRandomAccessStream
    Await ($page.RenderToStreamAsync($memStream, $renderOptions))
    
    $netStream = [System.IO.WindowsRuntimeStreamExtensions]::AsStream($memStream)
    $bmp = [System.Drawing.Bitmap]::FromStream($netStream)
    
    $pageNum = ($i + 1).ToString("D2")
    $outFile = Join-Path $outDir "slide-$pageNum.png"
    $bmp.Save($outFile, [System.Drawing.Imaging.ImageFormat]::Png)
    
    $bmp.Dispose()
    $netStream.Dispose()
    $memStream.Dispose()
    $page.Dispose()
    Write-Host "Exported slide $pageNum"
}

Write-Host "Done exporting all slides!"

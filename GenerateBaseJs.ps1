$Path = "mirrors.js"

Get-ChildItem -Recurse .\* -Include *.js | Resolve-Path -Relative | ConvertTo-Json | Out-File $Path

$content = Get-Content $Path -Raw
$content  = $content.Replace(".\\", "")
$content  = $content.Replace("]`r`n", "]")


$prepend = 'const mirrorsPath = '
$content = $prepend + $content + ";"
Set-Content $Path $content

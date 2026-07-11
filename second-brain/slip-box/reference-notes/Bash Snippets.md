change permission
* -R recursive
```bash
# copy user permission to group permission
chmod -R g=u <folder_name>
```

zip and unzip files
- `-c` create an archive
- `-z` compress the archive with gzip
- `-x`
- `-v` verbose mode with progress
- `-f` filename

```bash
# zip
tar -czvf name-of-archive.tgz /path/to/directory-or-file
# extract
tar -zxf name-of-archive.tgz /path/to/directory-or-file
```

```bash
# Check weather
> curl wttr.in/<location>

Weather report: SanFrancisco

       .-.      Light rain
      (   ).    +50(44) °F
     (___(__)   ↖ 9 mph
      ‘ ‘ ‘ ‘   8 mi
     ‘ ‘ ‘ ‘    0.0 in

```

```bash
# Check the download and upload speed
> networkQuality
```

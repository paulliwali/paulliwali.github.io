⨑ MOOD::

↻ HABIT [[◶ Trackers]]
[Meditate::]
[Exercise::]
[Read::]
[Personal Work::]

# <% moment(tp.file.title,'YYYY-MM-DD').format("dddd, MMMM DD, YYYY") %>

<< [[<%fileDate=moment(tp.file.title,'YYYY-MM-DD').subtract(1, 'd').format('YYYY-MM-DD')%>|Yesterday]] | [[<%fileDate=moment(tp.file.title,'YYYY-MM-DD').add(1,'d').format('YYYY-MM-DD')%>|Tomorrow]] >>
Retrospective:: [[<%fileDate=moment(tp.file.title,'YYYY-MM-DD').subtract(1,'M').format('YYYY-MM-DD')%>|Last Month]] | [[<%fileDate=moment(tp.file.title,'YYYY-MM-DD').subtract(1,'Y').format('YYYY-MM-DD')%>|Last Year]]

### 📅 Daily Questions

##### 🌜 Last night, after work, I

-

##### 🙌 One thing I'm excited about right now is

-

##### 🚀 One+ thing I plan to accomplish today is

- [ ]

##### 👎 One thing I'm struggling with today is

-

## 📝 Ephemeral Notes

- <% tp.file.cursor() %>

### Notes created today

```dataview

List FROM "" WHERE file.cday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.ctime asc

```

### Notes last touched today

```dataview

List FROM "" WHERE file.mday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.mtime asc

```

created: 2023-01-16 11:50

module hellobox

go 1.17

require gorm.io/driver/sqlite v1.2.3

require github.com/mattn/go-sqlite3 v2.0.1+incompatible // indirect

require (
	github.com/felixge/httpsnoop v1.0.1 // indirect
	github.com/gorilla/handlers v1.5.1
	github.com/nu7hatch/gouuid v0.0.0-20131221200532-179d4d0c4d8d
)

require (
	github.com/go-telegram-bot-api/telegram-bot-api/v5 v5.0.2-0.20210820200834-309d612d7095
	github.com/gorilla/mux v1.8.0
	github.com/jinzhu/inflection v1.0.0 // indirect
	github.com/jinzhu/now v1.1.2 // indirect
	gorm.io/gorm v1.22.2
)

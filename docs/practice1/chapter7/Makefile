CSS = .css
SCSS = .scss
SOURCES = $(wildcard *$(SCSS))
TARGETS = $(SOURCES:$(SCSS)=$(CSS))
RM = del

all: $(TARGETS)

clean:
	$(RM) $(TARGETS)

rebuild: clean
	make

%$(CSS): %$(SCSS)
	sass $^:$@ --style expanded


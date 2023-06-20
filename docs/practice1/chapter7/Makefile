CSS = .css
SCSS = .scss
SOURCES = $(wildcard *$(SCSS))
TARGETS = $(SOURCES:$(SCSS)=$(CSS))
SASS = sass
EXPANDED = --style expanded
RM = del


all: $(TARGETS)

clean:
	$(RM) $(TARGETS)

rebuild: clean
	make

%$(CSS): %$(SCSS)
	$(SASS) $^:$@ $(EXPANDED)


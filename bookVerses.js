// Source: https://gist.github.com/eykd/842200
const bookVerses = [
  ['Genesis', 50, [31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33, 38, 18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 55, 32, 20, 31, 29, 43, 36, 30, 23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26]],
  ['Exodus', 40, [22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27, 25, 26, 36, 31, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38, 29, 31, 43, 38]],
  ['Leviticus', 27, [17, 16, 17, 35, 19, 30, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37, 27, 24, 33, 44, 23, 55, 46, 34]],
  ['Numbers', 36, [54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 50, 13, 32, 22, 29, 35, 41, 30, 25, 18, 65, 23, 31, 40, 16, 54, 42, 56, 29, 34, 13]],
  ['Deuteronomy', 34, [46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 32, 18, 29, 23, 22, 20, 22, 21, 20, 23, 30, 25, 22, 19, 19, 26, 68, 29, 20, 30, 52, 29, 12]],
  ['Joshua', 24, [18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28, 51, 9, 45, 34, 16, 33]],
  ['Judges', 21, [36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31, 30, 48, 25]],
  ['Ruth', 4, [22, 23, 18, 22]],
  ['1 Samuel', 31, [28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 35, 23, 58, 30, 24, 42, 15, 23, 29, 22, 44, 25, 12, 25, 11, 31, 13]],
  ['2 Samuel', 24, [27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 33, 43, 26, 22, 51, 39, 25]],
  ['1 Kings', 22, [53, 46, 28, 34, 18, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46, 21, 43, 29, 53]],
  ['2 Kings', 25, [18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 21, 21, 25, 29, 38, 20, 41, 37, 37, 21, 26, 20, 37, 20, 30]],
  ['1 Chronicles', 29, [54, 55, 24, 43, 26, 81, 40, 40, 44, 14, 47, 40, 14, 17, 29, 43, 27, 17, 19, 8, 30, 19, 32, 31, 31, 32, 34, 21, 30]],
  ['2 Chronicles', 36, [17, 18, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 22, 15, 19, 14, 19, 34, 11, 37, 20, 12, 21, 27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 27, 23]],
  ['Ezra', 10, [11, 70, 13, 24, 17, 22, 28, 36, 15, 44]],
  ['Nehemiah', 13, [11, 20, 32, 23, 19, 19, 73, 18, 38, 39, 36, 47, 31]],
  ['Esther', 10, [22, 23, 15, 17, 14, 14, 10, 17, 32, 3]],
  ['Job', 42, [22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21, 29, 29, 34, 30, 17, 25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24, 41, 30, 24, 34, 17]],
  ['Psalms', 150, [6, 12, 8, 8, 12, 10, 17, 9, 20, 18, 7, 8, 6, 7, 5, 11, 15, 50, 14, 9, 13, 31, 6, 10, 22, 12, 14, 9, 11, 12, 24, 11, 22, 22, 28, 12, 40, 22, 13, 17, 13, 11, 5, 26, 17, 11, 9, 14, 20, 23, 19, 9, 6, 7, 23, 13, 11, 11, 17, 12, 8, 12, 11, 10, 13, 20, 7, 35, 36, 5, 24, 20, 28, 23, 10, 12, 20, 72, 13, 19, 16, 8, 18, 12, 13, 17, 7, 18, 52, 17, 16, 15, 5, 23, 11, 13, 12, 9, 9, 5, 8, 28, 22, 35, 45, 48, 43, 13, 31, 7, 10, 10, 9, 8, 18, 19, 2, 29, 176, 7, 8, 9, 4, 8, 5, 6, 5, 6, 8, 8, 3, 18, 3, 3, 21, 26, 9, 8, 24, 13, 10, 7, 12, 15, 21, 10, 20, 14, 9, 6]],
  ['Proverbs', 31, [33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24, 29, 30, 31, 29, 35, 34, 28, 28, 27, 28, 27, 33, 31]],
  ['Ecclesiastes', 12, [18, 26, 22, 16, 20, 12, 29, 17, 18, 20, 10, 14]],
  ['Song of Solomon', 8, [17, 17, 11, 16, 16, 13, 13, 14]],
  ['Isaiah', 66, [31, 22, 26, 6, 30, 13, 25, 22, 21, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25, 6, 17, 25, 18, 23, 12, 21, 13, 29, 24, 33, 9, 20, 24, 17, 10, 22, 38, 22, 8, 31, 29, 25, 28, 28, 25, 13, 15, 22, 26, 11, 23, 15, 12, 17, 13, 12, 21, 14, 21, 22, 11, 12, 19, 12, 25, 24]],
  ['Jeremiah', 52, [19, 37, 25, 31, 31, 30, 34, 22, 26, 25, 23, 17, 27, 22, 21, 21, 27, 23, 15, 18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32, 21, 28, 18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34]],
  ['Lamentations', 5, [22, 22, 66, 22, 22]],
  ['Ezekiel', 48, [28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 14, 49, 32, 31, 49, 27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38, 28, 23, 29, 49, 26, 20, 27, 31, 25, 24, 23, 35]],
  ['Daniel', 12, [21, 49, 30, 37, 31, 28, 28, 27, 27, 21, 45, 13]],
  ['Hosea', 14, [11, 23, 5, 19, 15, 11, 16, 14, 17, 15, 12, 14, 16, 9]],
  ['Joel', 3, [20, 32, 21]],
  ['Amos', 9, [15, 16, 15, 13, 27, 14, 17, 14, 15]],
  ['Obadiah', 1, [21]],
  ['Jonah', 4, [17, 10, 10, 11]],
  ['Micah', 7, [16, 13, 12, 13, 15, 16, 20]],
  ['Nahum', 3, [15, 13, 19]],
  ['Habakkuk', 3, [17, 20, 19]],
  ['Zephaniah', 3, [18, 15, 20]],
  ['Haggai', 2, [15, 23]],
  ['Zechariah', 14, [21, 13, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21]],
  ['Malachi', 4, [14, 17, 18, 6]],
  ['Matthew', 28, [25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30, 34, 46, 46, 39, 51, 46, 75, 66, 20]],
  ['Mark', 16, [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20]],
  ['Luke', 24, [80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48, 47, 38, 71, 56, 53]],
  ['John', 21, [51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25]],
  ['Acts', 28, [26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 28, 41, 38, 40, 30, 35, 27, 27, 32, 44, 31]],
  ['Romans', 16, [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27]],
  ['1 Corinthians', 16, [31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24]],
  ['2 Corinthians', 13, [24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 14]],
  ['Galatians', 6, [24, 21, 29, 31, 26, 18]],
  ['Ephesians', 6, [23, 22, 21, 32, 33, 24]],
  ['Philippians', 4, [30, 30, 21, 23]],
  ['Colossians', 4, [29, 23, 25, 18]],
  ['1 Thessalonians', 5, [10, 20, 13, 18, 28]],
  ['2 Thessalonians', 3, [12, 17, 18]],
  ['1 Timothy', 6, [20, 15, 16, 16, 25, 21]],
  ['2 Timothy', 4, [18, 26, 17, 22]],
  ['Titus', 3, [16, 15, 15]],
  ['Philemon', 1, [25]],
  ['Hebrews', 13, [14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25]],
  ['James', 5, [27, 26, 18, 17, 20]],
  ['1 Peter', 5, [25, 25, 22, 19, 14]],
  ['2 Peter', 3, [21, 22, 18]],
  ['1 John', 5, [10, 29, 24, 21, 21]],
  ['2 John', 1, [13]],
  ['3 John', 1, [15]],
  ['Jude', 1, [25]],
  ['Revelation', 22, [20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 17, 18, 20, 8, 21, 18, 24, 21, 15, 27, 21]],
];

/** bookVerseMap.get('Jude').get(1) = 25 */
const bookVerseMap =
  new Map(
    bookVerses.map(
      bookInfo => [
        bookInfo[0], 
        new Map(bookInfo[2].map((numVerse, index) => [index + 1, numVerse])),
      ]));

const bookNames = bookVerses.map((bookInfo => bookInfo[0]));
const allBooks = new Set(bookNames);
const newTestamentStart = bookNames.indexOf('Matthew');
const oldTestamentBooks = bookNames.slice(0, newTestamentStart);
const newTestamentBooks = bookNames.slice(newTestamentStart);

const add = (a, b) => a + b;

function getNumberVerses(selectedBooks) {
  return bookVerses
      .filter((bookInfo) => selectedBooks.has(bookInfo[0]))
      .map((bookInfo) => bookInfo[2])
      .map((chapterVerses) => chapterVerses.reduce(add, 0))
      .reduce(add, 0);
}

function getNumberChapters(selectedBooks) {
  return bookVerses
      .filter((bookInfo) => selectedBooks.has(bookInfo[0]))
      .map((bookInfo) => bookInfo[1])
      .reduce(add, 0);
}

const totalNumberVerses = getNumberVerses(allBooks);
const totalNumberChapters = getNumberChapters(allBooks);

class ScriptureSection {
  constructor(
    book, startingChapter, startingVerse, endingChapter, endingVerse) {
    this.book = book;
    const verseMap = bookVerseMap.get(this.book);
    this.startingChapter = startingChapter;
    this.endingChapter = endingChapter || this.startingChapter;
    this.startingVerse = startingVerse || 1;
    this.endingVerse = endingVerse || verseMap.get(this.endingChapter);
    if (this.startingChapter === this.endingChapter) {
      this.numberVerses = this.endingVerse - this.startingVerse + 1;
    } else {
      this.numberVerses = 
          verseMap.get(this.startingChapter) - this.startingVerse + 1;
      for (let i = this.startingChapter + 1; i < this.endingChapter; ++i) {
        this.numberVerses += verseMap.get(i);
      }
      this.numberVerses += this.endingVerse;
    }
  }

  isEmpty() {
    return this.getNumberChapters() === 0;
  }

  getBook() {
    return this.book;
  }

  getStartingChapter() {
    return this.startingChapter;
  }

  getStartingVerse() {
    return this.startingVerse;
  }

  getEndingChapter() {
    return this.endingChapter;
  }

  getEndingVerse() {
    return this.endingVerse;
  }

  getNumberVerses() {
    return this.numberVerses;
  }

  getNumberChapters() {
  	return this.endingChapter - this.startingChapter + 1;
  }

  canAppend(nextSection) {
    if (this.book != nextSection.book) {
      return false;
    }
    if (this.endingChapter + 1 === nextSection.startingChapter) {
      return true;
    }
    if (this.endingChapter === nextSection.startingChapter &&
            this.endingVerse + 1 === nextSection.startingVerse) {
      return true;
    }
    return false;
  }

  append(nextSection) {
    if (this.canAppend(nextSection)) {
      this.endingChapter = nextSection.endingChapter;
      this.endingVerse = nextSection.endingVerse;
      this.numberVerses += nextSection.numberVerses;
    } else {
      console.log(
        'Cannot add', this.toString(), 'and', nextSection.toString());
    }
    return this;
  }

  toString() {
    if (this.book === 'Psalms' && 
            this.startingChapter === this.endingChapter) {
      return `Psalm ${this.getChapterVerseString_()}`
    }
    return `${this.book} ${this.getChapterVerseString_()}`
  }

  getChapterVerseString_() {
    if (this.startingChapter === this.endingChapter &&
            this.startingVerse === this.endingVerse) {
      return `${this.startingChapter}:${this.startingVerse}`;
    }

    const hideVerses =
        this.startingVerse === 1 &&
            this.endingVerse === 
                bookVerseMap.get(this.book).get(this.endingChapter);
    if (this.startingChapter === this.endingChapter) {
      return hideVerses ?
          `${this.startingChapter}` :
          `${this.startingChapter}` +
              `:${this.startingVerse}-${this.endingVerse}`;
    }
    return hideVerses ?
         `${this.startingChapter}-${this.endingChapter}` :
        `${this.startingChapter}:${this.startingVerse}` +
            `-${this.endingChapter}:${this.endingVerse}`;
  }
}

function copySection(section) {
  return new ScriptureSection(
      section.getBook(),
      section.getStartingChapter(),
      section.getStartingVerse(),
      section.getEndingChapter(),
      section.getEndingVerse());
}

class ScriptureReading {
  constructor(sections) {
    this.sectionList = [];
    for (const section of sections) {
    	this.add(section);
    }
  }

  // This function won't WAI if you don't add things in ascending order.
  // We also won't merge overlapping sections.
  add(newSection) {
    for (const section of this.sectionList) {
      if (section.canAppend(newSection)) {
        section.append(newSection);
        return this;
      }
    }
    this.sectionList.push(copySection(newSection));
    return this;
  }

  isEmpty() {
    return this.getNumberChapters() === 0;
  }

  getSectionList() {
    return this.sectionList.map(copySection);
  }

  getNumberVerses() {
  	return this.sectionList.reduce(
  			(sum, nextSection) => sum + nextSection.getNumberVerses(), 0);
  }

  getNumberChapters() {
  	return this.sectionList.reduce(
  			(sum, nextSection) => sum + nextSection.getNumberChapters(), 0);
  }

  toString() {
    if (this.sectionList.length === 0) {
      return '';
    }
    return this.sectionList.map(section => section.toString()).join('<br>');
  }
}

const psalm119AcrosticSections = 
  [...Array(22).keys()].map(k => 
      new ScriptureSection(
          'Psalms', 
          /* startingChapter= */ 119, 
          /* startingVerse= */ k * 8 + 1, 
          /* endingChapter= */ 119, 
          /* endingVerse= */ k * 8 + 8));

const psalm119DailySections =
  [[0, 4], [4, 8], [8, 12], [12, 16], [16, 19], [19, 22]]
      .map(indices => {
        const startingVerse = indices[0] * 8 + 1;
        const endingVerse = indices[1] * 8;
        const chapter = 119;
        return new ScriptureSection(
            'Psalms',
            /* startingChapter= */ 119, 
            startingVerse, 
            /* endingChapter= */ 119, 
            endingVerse);
      })

const scriptureSectionRegex =
    new RegExp('([A-Za-z]+) ([0-9]+)(:([0-9])+)?(-([0-9]+)(:([0-9])+)?)?');
const BOOK_REGEX_GROUP = 1;
const STARTING_CHAPTER_REGEX_GROUP = 2;
const STARTING_VERSE_REGEX_GROUP = 4;
const ENDING_CHAPTER_OR_VERSE_REGEX_GROUP = 6;
const ENDING_VERSE_REGEX_GROUP = 8;
function parseScriptureSection(sectionString) {
  const matchResult = sectionString.match(scriptureSectionRegex);
  // Malformed
  if (!matchResult) {
    console.log('Cannot parse', sectionString, 'into ScriptureSection')
    return null;
  }
  const book = matchResult[BOOK_REGEX_GROUP];
  const startingChapter = Number(matchResult[STARTING_CHAPTER_REGEX_GROUP]);
  const startingVerse = Number(matchResult[STARTING_VERSE_REGEX_GROUP]);
  const endingChapterOrVerse =
      Number(matchResult[ENDING_CHAPTER_OR_VERSE_REGEX_GROUP]);
  const endingVerse = Number(matchResult[ENDING_VERSE_REGEX_GROUP]);
  // Genesis 1:1-2:2
  if (endingVerse) {
    return new ScriptureSection(
      book, startingChapter, startingVerse, endingChapterOrVerse, endingVerse);
  }
  if (endingChapterOrVerse) {
    // Genesis 1:1-2
    if (startingVerse) {
      return new ScriptureSection(
        book,
        startingChapter,
        startingVerse,
        /* endingChapter= */ null,
        endingChapterOrVerse);
    }
    // Genesis 1-2
    return new ScriptureSection(
      book,
      startingChapter,
      /* startingVerse= */ null,
      endingChapterOrVerse,
      /* endingVerse= */ null);
  }
  // Genesis 1:1
  return new ScriptureSection(
    book,
    startingChapter,
    startingVerse,
    /* endingChapter= */ startingChapter,
    /* endingVerse= */ startingVerse);
}

function getScriptureSectionsFromBookChapter(
      book, chapter, numVerses, psalmsOnly=false) {
	if (book === 'Psalms' && chapter === 119) {
		return psalmsOnly ? 
        [...psalm119DailySections] : [...psalm119AcrosticSections];
	}
  return [
	  new ScriptureSection(
	      book, 
	      /* startingChapter= */ chapter, 
	      /* startingVerse= */ 1, 
	      /* endingChapter= */ chapter, 
	      /* endingVerse= */ numVerses),
  ];
}

function getScriptureSectionsFromBookInfo(bookInfo, psalmsOnly=false) {
  return bookInfo[2]
  		.map((numVerses, index) => 
      		     getScriptureSectionsFromBookChapter(
      		         bookInfo[0], /* chapter= */ index + 1, numVerses, psalmsOnly))
		  .reduce(
		  	(sections, newSections) => sections.concat(newSections), []);
}

function getScriptureSections(selectedBooks) {
  const psalmsOnly = selectedBooks.size === 1 && selectedBooks.has('Psalms');
  return bookVerses
             .filter(bookInfo => selectedBooks.has(bookInfo[0]))
             .map(bookInfo => 
                  getScriptureSectionsFromBookInfo(bookInfo, psalmsOnly))
					   .reduce(
					  	   (sections, newSections) => sections.concat(newSections), []);
}

function addSpacingToSegments(filledSegments, numberEmptySpaces) {
  const numberFilledSpaces = filledSegments.length;
  const totalSpaces = numberEmptySpaces + numberFilledSpaces;
  let currentFilledCount = 0;
  const result = [];
  for (let i = 0; i < totalSpaces; ++i) {
    const expectedFilledSpaces = 
          Math.ceil((i + 1) * (numberFilledSpaces / totalSpaces));
    const shouldAppendFilled = currentFilledCount < expectedFilledSpaces;
    if (shouldAppendFilled) {
      result.push(filledSegments[currentFilledCount]);
      currentFilledCount += 1;
    } else {
      result.push(null);
    }
  }
  return result;
}

/**
 * @param {!Set<string>} selectedBooks
 * @param {number} numSegments
 * @return {!Array<!ScriptureReading>}
 */
function getScriptureReadings(selectedBooks, numSegments) {
	const sections = getScriptureSections(selectedBooks);
	if (sections.length < numSegments) {
    const numberEmptySpaces =
        numSegments - sections.length;
    const filledSegments =
        sections.map(section => new ScriptureReading([section]));
    return addSpacingToSegments(filledSegments, numberEmptySpaces);
	}
	const totalVerses = getNumberVerses(selectedBooks);
	const totalSections = sections.length;
	const avgVersesPerSegment = totalVerses / numSegments;
	let cumulativeVerses = 0;
	let cumulativeSections = 0;
	let segments = [];
	let segmentsArr = [];
	const isCloserTo = (a, b, c) => Math.abs(c - a) <= Math.abs(c - b);
	for (let i = 0; i < numSegments; ++i) {
		let currentVerses = 0;
		const remainingVerses = totalVerses - cumulativeVerses;
		const remainingSegments = numSegments - i;
		const verseSoftLimit = remainingVerses / remainingSegments;
		const maxSections = totalSections - numSegments + i + 1; 
		let currentSegment = [];
		while (
			  sections[0] &&
				((cumulativeSections < maxSections &&
						 isCloserTo(
						     currentVerses + sections[0].getNumberVerses(),
						     currentVerses,
						     verseSoftLimit)) ||
			       currentSegment.length === 0)) {
			currentSegment.push(sections[0]);
		  const sectionNumberVerses = sections[0].getNumberVerses();
			currentVerses += sectionNumberVerses;
			cumulativeVerses += sectionNumberVerses;
			cumulativeSections += 1;
			sections.shift();
		}
		segments.push(new ScriptureReading(currentSegment));
	}
	return segments;
}

Date.prototype.addDay = function(days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + 1);
    return date;
}

function getDateRange(startingDate, endingDate) {
  const dateRange = [];
  for (let d = startingDate; d <= endingDate; d = d.addDay()) {
  	dateRange.push(new Date(d));
  }
  return dateRange;
}

function getPsalmReadings(numberDays, dailyPsalms) {
  if (!dailyPsalms) {
    return getScriptureReadings(new Set(['Psalms']), numberDays);
  }
  const psalmsSections = getScriptureSections(new Set(['Psalms']));
  const result = [];
  for (let i = 0; i < numberDays; ++i) {
    result.push(
        new ScriptureReading([psalmsSections[i % psalmsSections.length]]));
  }
  return result;
}

/**
 * @param {!Array<!ScriptureReading>}
 * @param {!Array<!ScriptureReading>}
 */
function zipReadings(left, right) {
  const result = [];
  for (let i = 0; i < left.length; ++i) {
    if (!left[i]) {
      if (!right[i]) {
        result.push(null);
        continue;
      }
      result.push(new ScriptureReading(right[i].getSectionList()));
    }
    if (!right[i]) {
      result.push(new ScriptureReading(left[i].getSectionList()));
      continue;
    }
    const segment = new ScriptureReading(left[i].getSectionList());
    for (const section of right[i].getSectionList()) {
      segment.add(section);
    }
    result.push(segment);
  }
  return result;
}

/**
 * @param {!Date} startingDate
 * @param {!Date} endingDate
 * @param {!Set<string>} selectedBooks
 * @param {?} options
 */
function getBibleReadingPlan(
    startingDate, endingDate, selectedBooks, options) {
  const dateRange = getDateRange(startingDate, endingDate);
  const numberDays = dateRange.length;
  const mainBooks = new Set(selectedBooks.keys());
  if (options.parallelPsalms) {
    mainBooks.delete('Psalms');
  }
  const mainReadings = getScriptureReadings(mainBooks, numberDays);
  const scriptureReadings =
      options.parallelPsalms ? 
          zipReadings(
              mainReadings,
              getPsalmReadings(numberDays, options.dailyPsalms)) :
          mainReadings;
  const result =
      dateRange
          .map((date, index) => {
            if (!scriptureReadings[index]) {
              return null;
            }
            const sectionList = scriptureReadings[index];
            return {
              date,
              reading: sectionList.toString(),
              numVerses: sectionList.getNumberVerses(),
              numChapters: sectionList.getNumberChapters(),
            };
          })
          .filter(entry => !!entry);
  return result;
}

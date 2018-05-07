---
date: "2018-02-02"
title: "Markdown Example Page"
---

Paragraphs are separated by a blank line.

Sometimes you will want to break up some sections with new main headers. In
these cases, use an h1 like this. The h1 header (one # before) underlines the
title, giving a nice break to define a new section. An h1 header breaks up a
section and is the same size as the main title.

# New Section - h1

Lets style some text now that we have started a new section. Let's title this
with an h2 header (two # symbols before) in order to mark this as a subsection.

## Text Styles - h2

_Italic_, **bold**, `monospace`, and ~~strikethrough~~.

We will now discuss lists, again using an h2 header.

## Lists - h2

Because there are many kinds of lists, we will use an h3 header for each
individual type for a sub-subsection!

### Unordered lists - h3

Unordered lists look like:

* this one
* that one
* the other one

### Ordered lists - h3

Ordered lists are more like:

1.  first item
2.  second item
3.  third item

Now let's discuss tables.

A quick table.

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

> Block quotes are written like so.
>
> They can span multiple paragraphs, if you like.
>
> > You can nest them as well.  
> > Isn't that cool. Although you probably shouldn't... it looks medium at best I
> > think.

Also, Three dots ... will be converted to an ellipsis. Unicode is supported. ☺

Although you can go lower than h4, you probably shouldn't. It is a slightly
bolded title, maybe to title some chart or picture. Regardless, here is h4 and
others:

#### An h4 header

See this one is practical. It is the same size as the surrounding text.

##### An h5 header

^ This sucks.

###### An h6 header

^ This sucks even more.

---

(by the way that line above is done by typing ---)

#### Lets do a complex list

1.  First, get these ingredients:

    * carrots
    * celery
    * lentils

2.  Boil some water.

3.  Dump everything in the pot and follow this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including that last
line which continues item 3 above).

Here's a link to [a website](http://foo.bar), to a
[blog on a seperate page](local-doc.html), and to a
[section heading in the current doc](#an-h4-header). Here's a footnote [^1].

[^1]: Footnote text goes here.

Tables can look like this:

size material color

---

9 leather brown 10 hemp canvas natural 11 glass transparent

Table: Shoes, their sizes, and what they're made of

(The above is the caption for the table.) Pandoc also supports multi-line
tables:

---

keyword text

---

red Sunsets, apples, and other red or reddish things.

green Leaves, grass, frogs and other things it's not easy being.

---

A horizontal rule follows.

---

Here's a definition list:

apples : Good for making applesauce. oranges : Citrus! tomatoes : There's no "e"
in tomatoe.

Again, text is indented 4 spaces. (Put a blank line between each term/definition
pair to spread things out more.)

Here's a "line block":

| Line one | Line too | Line tree

and images can be specified like so:

![example image](example-image.jpg 'An exemplary image')

Inline math equations go in like so: $\omega = d\phi / dt$. Display math should
get its own line and be put in in double-dollarsigns:

$$I = \int \rho R^{2} dV$$

And note that you can backslash-escape any punctuation characters which you wish
to be displayed literally, ex.: \`foo\`, \*bar\*, etc.

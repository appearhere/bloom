# Rick’s guide to writing Markdown @ Appear Here

## What is Markdown?

Markdown is a form of markup which allows you to add semantics to your content.

Technically speaking it:

> is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).

## What *isn’t* markdown?

**A way of making content look a particular way.** When writing markdown, try and remember that you’re trying to add additional meaning to the content, e.g., hierarchy, emphasis, or additional functionality, e.g., links to other content.

## Why markdown?

It adds underlying semantics to the content you write. By doing this, our content will perform better in terms of SEO as Google & co’s robots will be able to understand the content better. That, as it’s easy enough to grok.

## Initial reading

Give the following a read through, and then come back to this guide. Once you’re familiar with the technicalities, we’ll talk specifics of how it works on Appear Here’s Editorial section.

- [Official documentation](https://daringfireball.net/projects/markdown/).
- [Cheatsheet](https://www.cheatography.com/specialbrand/cheat-sheets/markdown/)

## Headings

Currently we only support headings from 1-4, i.e.:

```markdown
# Top level heading
## Your second level heading
### etc.
#### etc.
```

You’ll **never** need to use a `H1`, as that is used by the blog’s title:

![An editorial post’s h1](https://s9.postimg.org/3lrnt961b/Screen_Shot_2016_08_08_at_17_12_54.png)

For `h2-4`, use them as necessary to structure your post in a sensible way. I.e., a `h3` should only be used as a subheading to a `h2`, a `h4` as a subheading to a `h3` etc.

## Emphasis

You have two levels of emphasis you can add to your content:

```markdown
*emphasised content*

**super-mega-emphasised content**
```

Which will look something like:

*emphasised content*

**super-mega-emphasised content**

Use it sparingly, and not as a way of breaking content up.

## Images

Markdown let’s you write images in a mega simple way:

```markdown
![Image description](IMAGE_URL)
```

While that’s great, it doesn’t let you add captions to the images in the *correct* way. Because of this, you’ll have to write some HTML. Don’t worry though, it’ll be a case of copying these snippets and replacing bits of them where necessary.

### Image

```markup
<figure>
  <img src="IMAGE_URL" alt="IMAGE DESCRIPTION" />
</figure>
```

### Image with caption

```markup
<figure>
  <img src="IMAGE_URL" alt="IMAGE DESCRIPTION" />
  <figcaption>
    <p>IMAGE CAPTION</p>
  </figcaption>
</figure>
```

### Image with link

```markup
<figure>
  <a href="LINK_URL">
    <img src="IMAGE_URL" alt="IMAGE DESCRIPTION" />
  </a>
</figure>
```

### Image with link and caption

```markup
<figure>
  <a href="LINK_URL">
    <img src="IMAGE_URL" alt="IMAGE DESCRIPTION" />
  </a>
  <figcaption>
    <p>IMAGE CAPTION</p>
  </figcaption>
</figure>
```

## Need more help?

- [View this post in it's raw, markdown form](https://gist.githubusercontent.com/rdjpalmer/916418ed71d4af9bff727be0e1255f81/raw/697710b18073e60b9745775cf3c7f3212f47f71b/ricks-guide-to-markdown-at-appearhere.md)
- [Official documentation](https://daringfireball.net/projects/markdown/).
- [Cheatsheet](https://www.cheatography.com/specialbrand/cheat-sheets/markdown/)
- Speak to one of the tech team
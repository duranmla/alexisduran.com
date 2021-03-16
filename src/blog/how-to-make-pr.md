---
title: How you should make your PR?
author: Alexis
date: 2021-03-16
status: 'done'
---

While I don't pretend to tell you how to do your work, my point with this blog post is to somehow communicate that pull requests are not *"good"* by default, but rather as with everything in life, we need to be intentional with them. In that sense, hear me out on this one:

> *Behind every great pull request reviewer, there is a "greater" context*

And while it seems to be very obvious, experience has shown me that people tend to do not to seek more context *(until a certain point in their careers in which they start to spot the same problems I'm revealing with this blog post)*.

## People tend to don't seek context

There are very few chances for people involved in your pull request to give you meaningful feedback unless they share context with you or they see at least the same things you saw when you first encounter the problem you are solving with the pull request.

The very sad reality is that oftentimes people won't push for more context, although it sounds like a consequence of a bad culture, laziness, or any other negative characteristics of a reviewer, I truly believe that it is just part of the way we function as human beings. A task has been given to our brain and it looks for ways to optimize things and deliver solutions to accomplish the task.

What happens when the poor context is the main ingredient of your pull request? Then what you will receive in the very best cases it is more of this "semantics" of your code.

## Semantics are good but you need more

Before going down this route, when I mention semantics, I mean the early returns, the short circuit usage, switch vs if, type static definitions, boolean variables, avoid negative names... so on and so for that maybe you already got the point, it is a composition between ESLint best known rules and human best collaboration practices.

Don't get me wrong, I am super into clear and readable code *(who don't?)*, code is being written for humans but at some point in order to unlock a new level of thinking, a new way to abstract problems and achieve better solutions we need the architectural criticism, the broad picture, the why we approach the problem as we did.

## All right, All right, All right... What to do?

Easy, work into improving your process as pull request author, use templates. I first stumble with this template by seeing a pull request from Kent C. Dodds and later stages when I thank him, he replied seeing he copied from TBD in any case this as much of my ideas is not originally from me but has some of my opinions too. A pull request from me will look like this:

```markdown
**What:**
Declarative and short sentence of what this PR accomplish

**Why:**
A brief explanation over why this need arise and often a link to the ticket
where a further description of the issue/problem can be found.

**How:**
Often a list of things I can use to describe the process to accomplish this PR

**Media:**
Depending on the impact of the change or the complexity I will choose an image or 
a Loom video where I describe the work I have made.
```

A practical example of this could be something like this:

```markdown
**What:**
Add base to render screen for the pokemon list

**Why:**
Users need to see a list of pokemon in order to easily navigate to details.
_This PR doesn't add aesthetics but rather functionality only_
relates #192

**How:**
1. Add a new screen to hold Pokemon list composition
2. Add a hook to abstract Pokemon API consumption
3. Add raw components to render the Pokemon API results

**Media:**
http://loom.com/me-describing-the-code-and-how-it-looks
```

Essentially, the template will force you to adopt a habit of manually reviewing your code, understanding the global intention, and to expose your perspective to people so they can have more insight about the work you did.

## And there are few caveats

1. Your pull request should only have a single **What** if you see you have more than one, you should consider using a section of **Extras** and hopefully, they **are** just a few items and only *"chores"*. Otherwise, split the PR
2. Your PR should be focused, scatter efforts will yield less context, more complexity to review the pull request, and fewer chances to have a quality review
3. Use visual resources as much as possible to describe the problem and the proposed solution
4. Keep the template short and concise, be mindful of other people time and energy
5. **Start the discussion early**

## **Start the discussion early**

Make sure to create channels where people and you communicate frequently with the members of the team *(regardless of the size)* and expose early ideas and thoughts about the problem you are about to solve. We tend to attach to our solutions when they are mature, so even if you pull request in terms of the structure if perfect you need to be able to adjust and change paths avoiding the excuse of *"we need to meet the deadline, there is no time".*

Planning and thinking before execute code is one of the most valuables things you can incorporate into your work process.

## Some resources for you

- [Excalidraw](https://excalidraw.com/)
- [Loom | Send a video. Not a thousand words.](https://www.loom.com/)
- [Recordit: Record screencasts fast & free! with GIF Support!](https://recordit.co/)

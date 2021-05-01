---
title: The 5 things about testing as part of code, not a chore
author: Alexis
date: 2021-04-30
status: 'done'
---

Throughout my last years of my career, I have become very passionate about testing as a part of my workflow, I really feel it like a tool to achieve success rather than a chore I need to do because people said I should. In this small article, I will highlight the 5 perks I think of when I need to describe my testing thoughts.

## Discovery

In software development before going into a "ticket", we have a process of "refinement", in this step we often try to oversight different obstacles and requirement to achieve our intention, nevertheless, it is normal that only when you start to get your hands dirty you start to spot other things.

When doing some sort of testing pattern we allow ourselves to step back and ask ourselves the question:

> *What are the things that should happen? What are the pieces that should interact here?*

That's why I can sometimes be a bit nerdy with test titles, often I encourage myself to be very explicit and declarative those test title will set some bias and assumptions over the problem and will allow me to "vocalize" all the different characteristics of the piece of functionality I am trying to build.

## Resiliency

I remember one opportunity in the early stages of my career where I needed to deliver a product for a client and the code I was writing didn't have any tests *(for whatever excuse I had at that time).* When you are doing small codebases maybe you can make your way around building functionality without tests and hold reference of which pieces of the software affects what, but as soon as you product scale or you stop working with it for few months you will lose the context and with it the ability to iterate over the code.

In that sense, if you take one piece of advice over this blog post I would love to be this:

> *You write tests so you can refactor with confidence*

What you need are tests that allow your code to evolve and change with time without constantly going back to adjust the test because you assume implementation details in your tests. Your test needs to be agnostic to the implementation approach and the should be descriptions of the developer's intentions and user journeys.

## Focus

Before going to the point I will comment out few situations which hopefully you can relate to. Since I am aware of my existence I have to struggle with my ability for short-term memory, I often forget things quickly, as I grow old I need to overcome that and my solution has been much around Journaling and my calendar. Besides, I often find myself in the situation of doing something and my mind wondering about unrelated subjects or perhaps it happens that I am doing something and I get distracted or I need to stop in the middle of the process.

When I write my tests I can set an intention, an expectation of what is this next thing I am going to accomplish, this will set me free of the temptation of refactoring some portion of the code unrelated to my current task. Don't get me wrong I still do some scout work *(leaving the code a bit better than when I arrive at it)* but I can postpone those intentions and circle back to my original intention by reading my test and focus on making it pass.

> *Testing is a way to ask your computer "Ok, what I was doing?" and manage to get an answer.*

## Documentation

Many times I try to keep this as a basis of how much should I test and how many tests to do, for me your tests will serve for all proposes above and will also help the next person after you to understand the intentions.

> *The next developer that will work with your code should be able to understand the user journey and the intention of the pieces of software you wrote by reading your test suite*

Try to make your test suite with the same love as a document that you really want people to read, be concise, be brief but assertive I love it when I can use VSCode "fold" feature and I can read all test suite titles and everything makes sense.

## Dopamine

It is funny because I wanted to force the 5 points to happen in this blog post just for fun and I come up with this one which wasn't super obvious in the beginning but it holds true.

In your career as a software developer, you will find a moment of frustration, moments where you feel lost and frustrated but the best way to move forward is to keep calm and keep your mental game at the highest. That's why I believe testing can contribute greatly to keep you motivated and feed your reward system.

Once you set expectations throughout testing you will get a path to obtain "rewards" in form of useful chunks of code while you move through your development process which keeps your mood and serve as a reminder you are doing actual progress towards your main goal

---

That's it! if you haven't started yet to test, make sure to force you to break the first barrier your future self will thank you!

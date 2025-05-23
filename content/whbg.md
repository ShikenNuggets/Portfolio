**Team:** Solo
**Type:** 3D Platformer (Personal - Game Jam)
**Timeline:** Aug 16-19, 2024 (4 days)
**Tech:** C++ [(GadgetEngine)](/projects/gadget) / OpenGL / Git

https://www.youtube.com/watch?v=i_34XPndMCA

For this year’s [GMTK Game Jam](https://itch.io/jam/gmtk-2024), rather than using a more established engine like Unity, Unreal, or Godot, I decided to try using my own engine that I’ve been working on, [Gadget Engine](https://gamesbycarter.wordpress.com/2022/06/22/gadget-engine-c/). This presented a number of challenges and definitely limited the quality of game that I was able to produce, but ultimately was very rewarding and helped me identify a number of issues and fix numerous bugs (I made 52 commits to the engine during the jam).

The theme of the jam was “Built to Scale”. I loved this theme! So many ways to interpret it. Big things, small things, growing, shrinking, building things, physical scales for measuring weight, reptile/fish scales, scaling in a programming context, climbing, the possibilities really were endless! The first thing that popped into my head was some kind of Ant-Man game, where you’d shrink down to jump through key holes and grow to smash through walls. I thought of some other ideas, but that was the one I ultimately fleshed out, although I replaced Ant-Man with a hamster, partly because I thought it would be funny, and partly because I don’t actually have character animation available in Gadget yet (that’s my next priority!), and so “Weird Hamster Ball Game” was formed (I couldn’t think of a name, so my placeholder name stuck through to the end).

Despite the large number of engine bugs that I found (and fixed) during the jam, I don’t think the state of the engine itself was actually a huge workflow issue. I think if I was using another engine I would’ve spent an equivalent amount of time diagnosing strange issues with it, trying to find related documentation, etc. Whereas with my engine, if something was wrong I knew immediately where to look and was able to fix it fairly easily.

https://www.youtube.com/watch?v=0gvdNaWN8-8

What *was* a huge workflow issue was that I don’t have a level editor. All my scenes and objects and stuff are defined in C++, which means I just had to guess positions and do a slow build step before I could see if it worked. This is something I should definitely explore for future game jams, in theory I’m able to serialize objects and such, it’s just the editor itself that I haven’t fully explored yet. To work around this I created a new kind of collider that takes a triangle mesh as its input, so I can easily set up collision on something created in a 3D modelling program such as Blender. The goal was to create the whole level in Blender, but by the time I got the mesh colliders in and and addressed all the other things the game needed I really only had time to create the ramp in Blender, which was then haphazardly reused via for loops. If I had a little bit more time I could’ve done something a bit more interesting, but by the halfway point of the final day I was getting pretty tired and decided to call it.

https://www.youtube.com/watch?v=XrYj-01eXC0

The game itself didn’t turn out particularly well, the initial learning curve is very frustrating, but the few people who playtested the game and stuck through it did manage to enjoy it in the end. But for me this was mostly a stress test for Gadget Engine, and in that regard I think it was a tremendous success. In the sense that there really were a lot of problems, but a lot of them have now been fixed, and I now have a stronger sense of what to prioritize going forward, and what needs to be fixed before the next jam.

You can download and play the game [from the itch.io page](https://shikengames.itch.io/weird-hamster-ball-game).

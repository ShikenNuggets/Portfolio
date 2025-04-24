**Team:** Solo
**Type:** Game Engine (Personal)
**Timeline:** June 2022 – Present
**Tech:** C++ / OpenGL / D3D12 / Git

It’s been a couple years since [Roof Toppers and the PizzaBox game engine](/projects/roof-toppers), and I’ve learned a lot about game engines through the experience of creating that, as well as my professional experience in the industry, so I decided it was high time to get back into engine development and start making a new one.

My main goal with this engine was to fix the issues that existed in PizzaBox, while expanding the feature set for more modern sensibilities. Initially I was trying to create as much of the engine as possible from scratch without the assistance of external libraries, but in the interest of time I am leaning on open-source middleware that can be replaced with custom implementations later on.

The engine has basic rendering functionality with OpenGL (mesh rendering, Blinn-Phong lighting, cubemaps, some basic post-processing, skeletal animation). I attempted to integrated DX12 to support modern rendering features sunch as raytracing, but ultimately didn't end up finishing this.

The [code repository can be found here](https://github.com/ShikenNuggets/GadgetEngine).

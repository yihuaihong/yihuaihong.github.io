---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>


<div class="intro" markdown="1">

Hello, I am Yihuai Hong, a 2nd Year Ph.D. student in Computer Science at New York University (Courant Institute). My research interests lie in Natural Language Processing and Language Models.

<div class="story" markdown="1">

My research story revolves around the <span style="color:black; font-weight:bold;">Mechanistic Interpretability of LLMs</span>, turning what we find inside models into action to make them more <span style="color:black; font-weight:bold;">capable</span> and <span style="color:black; font-weight:bold;">safer</span>:

- {: .branch .branch--cap} **Interpretability for Capability** <span class="branch-def">making models learn faster, reason better, and run more efficiently</span>
     - {: .subgroup} Training & Architecture
          - Manifold Pretraining Engineering <span class="wip">Preprint soon</span>
          - LooM: Latent Looped Reasoning Model <span class="wip">In progress</span>
          - LLM Knowledge Distribution [[NeurIPS 2025](http://arxiv.org/abs/2505.17260)]
     - {: .subgroup} Post-hoc Intervention
          - Reasoning-Memorization Interplay [[ACL 2025 Findings](https://arxiv.org/abs/2503.23084)]
          - LLM Knowledge Editing [[EMNLP 2024 Main](https://aclanthology.org/2024.emnlp-main.225)]
          - LLM Efficient Inference [[AAAI 2024 main track](https://ojs.aaai.org/index.php/AAAI/article/view/29922)]
- {: .branch .branch--safe} **Interpretability for Safety** <span class="branch-def">checking from the inside what models really know, compute, and do</span>
     - {: .subgroup} LLM Oversight
          - CoT Monitoring: CoT-Interpretability Alignment [[Preprint 2026](https://arxiv.org/abs/2609.38972)]
          - Roots of Misalignment <span class="wip">In progress</span>
     - {: .subgroup} LLM Unlearning
          - Parametric Knowledge Benchmark [[EMNLP 2025 Main](https://arxiv.org/abs/2406.11614)]
          - Dissect Finetuning Unlearning [[EMNLP 2024 Main](https://arxiv.org/abs/2410.06606)]
          - LLM Unlearning methods [[EMNLP 2025 Main](https://arxiv.org/abs/2505.22586)]

</div>

Before my PhD career, I was very fortunate to work with <a href="https://mega002.github.io/" style="text-decoration: none;">Prof. Mor Geva Pipek</a> from Tel Aviv University and Google Research on LLM Unlearning, and with <a href="https://zhijing-jin.com/fantasy" style="text-decoration: none;">Prof. Zhijing Jin</a> from University of Toronto on Mechanistic understanding of Reasoning. I was also a researcher at <a href="https://github.com/DAMO-NLP-SG" style="text-decoration: none;">Alibaba DAMO Academy</a> working with <a href="https://isakzhang.github.io" style="text-decoration: none;">Dr. Wenxuan Zhang</a> and <a href="https://royrong.me/" style="text-decoration: none;">Dr. Yu Rong</a>. More information in my <a href="https://drive.google.com/file/d/1iC1alfcwDm2u1QjHXvqFUjSCJ424WIBL/view?usp=sharing" style="text-decoration: none;">CV</a>. <span class="hiring">And I am actively looking for internship opportunities for 2027 Summer! Please let me know if you think I am a good fit!</span>

</div>

<!-- -And starting from my second year, I was conducting research on the acceleration of Language Model's inference under the supervision of <a href="https://ziqianzeng.github.io/" style="text-decoration: none;">Prof. Ziqian Zeng</a>. Meanwhile, last summer I was visiting <a href="https://www.ucl.ac.uk/ai-centre/ucl-centre-artificial-intelligence" style="text-decoration: none;">UCL AI Centre</a> & <a href="https://wi.cs.ucl.ac.uk/" style="text-decoration: none;">Web Intelligence Group</a> as a research intern with a focus on the area of Knowledge Editing on Large Language Models, under the supervision of <a href="https://aldolipani.com/" style="text-decoration: none;">Prof. Aldo Lipani</a>. -->



# 🔥 News
- <span class="news-date">2026.09</span> 🚀🚀 Please check my newest paper! <span style="color: black; font-weight: bold;">[Making LLMs Say What They Think: Measuring and Improving CoT-Interpretability Alignment](https://arxiv.org/abs/2609.38972)</span> We propose <span style="color: black; font-weight: bold;">CIA</span>, a metric that checks whether an LLM's chain-of-thought matches the reasoning detected inside the model by interpretability tools, and show that post-training can substantially improve this alignment while maintaining or improving task accuracy!
- <span class="news-date">2025.09</span> 🎉🎉 <span style="color: black; font-weight: bold;">My first NeurIPS!</span> One <span style="color: black; font-weight: bold;">1st-author</span> paper has been accepted to NeurIPS 2025! "The Rise of Parameter Specialization for Knowledge Storage in Large Language Models"! And I received the <span style="color: black; font-weight: bold;">NeurIPS 2025 Scholar Award!</span> Thanks to the guidance from Prof. Wenxuan Zhang, Dr. Yu Rong, and the help of other collaborators! See you at San Diego!
- <span class="news-date">2025.08</span> 🎉🎉 One <span style="color: black; font-weight: bold;">1st-author</span> paper and one co-authored paper have been both accepted to <span style="color: black; font-weight: bold;">EMNLP 2025 Main</span>! "Intrinsic Test of Unlearning Using Parametric Knowledge Traces"! Thanks to the guidance from Prof. Mor Geva, Dr. Shauli Ravfogel, Dr. Lei Yu, and the help of other collaborators! 
- <span class="news-date">2025.05</span> 🎉🎉 My <span style="color: black; font-weight: bold;">new 1st-author</span> paper has been accepted to <span style="color: black; font-weight: bold;">ACL 2025 Findings</span>! "The Reasoning-Memorization Interplay in Language Models Is Mediated by a Single Direction"! Thanks to the guidance from Prof. Zhijing Jin, Dr. Lei Yu and the help of other collaborators. See you in Vienna!
- <span class="news-date">2024.09</span> 🎉🎉 My <span style="color: black; font-weight: bold;">two new 1st-author</span> papers both have been accepted to <span style="color: black; font-weight: bold;">EMNLP 2024 Main</span>! "Dissecting Fine-Tuning Unlearning in Large Language Models" and "Interpretability-based Tailored Knowledge Editing in Transformers"! Feel so grateful to all my mentors and collaborators. See you in Miami!
- <span class="news-date">2024.06</span> 🚀🚀 Please check my newest paper! <span style="color: black; font-weight: bold;">[Intrinsic Evaluation of Unlearning Using Parametric Knowledge Traces](https://arxiv.org/abs/2406.11614) </span> This is the <span style="color: black; font-weight: bold;">first-ever parametric LLM Unlearning Benchmark!</span> Thanks to the guidance from Prof. Mor Geva and the help of other collaborators.
- <span class="news-date">2023.12</span> 🎉🎉 My first work is accepted to <span style="color: black; font-weight: bold;">AAAI 2024 main track</span> and I also won the <span style="color: black; font-weight: bold;">AAAI-24 Student Scholarship</span>! I am genuinely thankful to Prof. Zeng for guiding me and for her help along this path!
{: .news-list tabindex="0" aria-label="News"}


# 📝 Research

<div class='paper-box'><div class='paper-box-image'><div><img src='images/cia_thumb.jpg' alt="Overview of CoT-Interpretability Alignment (CIA)" width="110%" loading="lazy"></div></div>
<div class='paper-box-text' markdown="1">

<a id="cia">[Making LLMs Say What They Think: Measuring and Improving CoT-Interpretability Alignment](https://arxiv.org/abs/2609.38972)</a>  

<span style="color: black; font-weight: bold;">Yihuai Hong</span>, Shauli Ravfogel, Chen Zhao<sup>†</sup>, Eunsol Choi<sup>†</sup>

[Arxiv](https://arxiv.org/abs/2609.38972) / [GitHub](https://github.com/yihuaihong/CIA-minimal-repro)

<span class="venue">Preprint 2026</span>

We propose CoT-Interpretability Alignment (CIA), which measures whether an LLM's chain-of-thought matches the reasoning strategy that interpretability tools detect inside the model, and find limited alignment (44.8–75.9%) across three tasks and three LLMs. Using CIA as a post-training reward substantially improves this alignment while maintaining or improving task accuracy.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><img src='images/param_special.jpg' alt="Parameter specialization overview" width="110%" loading="lazy"></div></div>
<div class='paper-box-text' markdown="1">

<a id="param_specialization">[The Rise of Parameter Specialization for Knowledge Storage in Large Language Models](http://arxiv.org/abs/2505.17260)</a>  

<span style="color: black; font-weight: bold;">Yihuai Hong</span>, Yiran Zhao, Wei Tang, Yu Rong, Wenxuan Zhang

[Arxiv](http://arxiv.org/abs/2505.17260) / [GitHub](https://github.com/yihuaihong/Parameter_Specialization)

<span class="venue">NeurIPS 2025</span>

Analyzing 20 open-source LLMs, we find that stronger models store similar knowledge in more specialized MLP parameters, and causal training experiments show that this specialization helps models use their stored knowledge more efficiently.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><img src='images/unlearn_data_process2_page-0001.jpg' alt="ConceptVectors benchmark overview" width="110%" loading="lazy"></div></div>
<div class='paper-box-text' markdown="1">

<a id="conceptvectors">[Intrinsic Test of Unlearning Using Parametric Knowledge Traces](https://yihuaihong.github.io/ConceptVectors.github.io/)</a>  

<span style="color: black; font-weight: bold;">Yihuai Hong</span>, Lei Yu, Haiqin Yang, Shauli Ravfogel, Mor Geva

[Website](https://yihuaihong.github.io/ConceptVectors.github.io) / [Arxiv](https://arxiv.org/pdf/2406.11614) / [GitHub](https://github.com/yihuaihong/ConceptVectors) / [Huggingface](https://huggingface.co/datasets/YihuaiHong/ConceptVectors) / [Twitter](https://x.com/YihuaiH91773/status/1803871246037164489)

<span class="venue">EMNLP 2025 Main</span>

Current unlearning methods change model behavior without erasing the knowledge stored in the parameters. Our ConceptVectors benchmark (285 concept vectors in two open-source LLMs) tests unlearning at the parameter level, and ablating these vectors removes the knowledge and makes models less vulnerable to adversarial attacks.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><img src='images/interp_reasoning.jpg' alt="Linear reasoning features overview" width="110%" loading="lazy"></div></div>
<div class='paper-box-text' markdown="1">

<a id="lirefs">[The Reasoning-Memorization Interplay in Language Models Is Mediated by a Single Direction](https://arxiv.org/abs/2503.23084)</a>  

<span style="color: black; font-weight: bold;">Yihuai Hong</span>, Dian Zhou, Meng Cao, Lei Yu, Zhijing Jin

[Arxiv](https://arxiv.org/abs/2503.23084) / [GitHub](https://github.com/yihuaihong/Linear_Reasoning_Features)

<span class="venue">ACL 2025 Findings</span>

We identify linear features in the residual stream that govern whether an LLM reasons or recalls from memory, and show that intervening on them helps the model use the right problem-solving ability.

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><img src='images/dissect-ft-unlearning.jpg' alt="Dissecting fine-tuning unlearning overview" width="110%" loading="lazy"></div></div>
<div class='paper-box-text' markdown="1">

<a id="finetuning-unlearning">[Dissecting Fine-Tuning Unlearning in Large Language Models](https://arxiv.org/abs/2410.06606)</a>

<span style="color: black; font-weight: bold;">Yihuai Hong</span>, Yuelin Zou, Lijie Hu, Ziqian Zeng, Di Wang, Haiqin Yang

[Arxiv](https://arxiv.org/abs/2410.06606) / [GitHub](https://github.com/yihuaihong/Dissecting-FT-Unlearning)

<span class="venue">EMNLP 2024 Main</span> <span class="venue venue--oral">Oral</span>

Using activation patching and parameter restoration, we show that fine-tuning-based unlearning changes how models retrieve knowledge rather than erasing it, with MLP coefficients in the final layer driving most of the apparent forgetting.

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/main%20structure_page-0001.jpg' alt="TailoredKE overview" width="110%" loading="lazy"></div></div>
<div class='paper-box-text' markdown="1">

<a id="knowledge-editing">[Interpretability-based Tailored Knowledge Editing in Transformers](https://aclanthology.org/2024.emnlp-main.225)</a>

<span style="color: black; font-weight: bold;">Yihuai Hong</span>, Aldo Lipani

[Paper](https://aclanthology.org/2024.emnlp-main.225) / [Github](https://github.com/yihuaihong/TailoredKE) 

<span class="venue">EMNLP 2024 Main</span>

Interpretability shows that different samples recall their attributes at different layers, so TailoredKE edits each sample at its own depth, which mitigates over-editing.

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/Main%20Structure.png' alt="ConsistentEE overview" width="110%" loading="lazy"></div></div>
<div class='paper-box-text' markdown="1">

<a id="consistentee">[ConsistentEE: A Consistent and Hardness-Guided Early Exiting Method for
Accelerating Language Models Inference](https://arxiv.org/abs/2312.11882)</a>

Ziqian Zeng<sup>*</sup>, <span style="color: black; font-weight: bold;">Yihuai Hong<sup>*</sup></span>, Huiping Zhuang, Cen Chen, HongLiang Dai

[Arxiv](https://arxiv.org/abs/2312.11882) / [GitHub](https://github.com/ZeroNLP/ConsistentEE)

<span class="venue">AAAI 2024 Main Track</span>

We formulate early exiting as a reinforcement learning problem so that training and inference stay consistent, and use a per-instance hardness measure (Memorized Layer) in the reward to balance accuracy and speed.

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->

</div>
</div>




<!-- - [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020** -->

# 📖 Educations
- 2025.09 - present, Ph.D. student in Computer Science, Courant Institute, New York University
- 2020.09 - 2024.06, Bachelor of Engineering, School of Computer Science and Engineering, South China University of Technology

# 💻 Internships
- 2024.10 - 2025.06, Research Intern in [Alibaba DAMO Academy](https://github.com/DAMO-NLP-SG), Supervisor: <a href="https://isakzhang.github.io" style="text-decoration: none;">Dr. Wenxuan Zhang</a> and <a href="https://royrong.me/" style="text-decoration: none;">Dr. Yu Rong</a>, Hangzhou, China.
- 2024.07 - 2024.11, Research Intern in University of Toronto, Supervisor: <a href="https://zhijing-jin.com/fantasy/" style="text-decoration: none;">Prof. Zhijing Jin</a>, Canada(Remote). 
- 2024.02 - 2024.08, Research Intern in Tel Aviv University, Supervisor: <a href="https://mega002.github.io/" style="text-decoration: none;">Prof. Mor Geva</a>, Israel(Remote). 
<!-- - 2023.11 - 2024.02, Research Intern in [China International Digital Economy Academy](https://www.idea.edu.cn/), Supervisor: <a href="https://hqyang.github.io/" style="text-decoration: none;">Prof. Haiqin Yang</a>, Shenzhen, China. -->
- 2023.06 - 2023.12, Research Intern in [UCL AI Centre](https://www.ucl.ac.uk/ai-centre/ucl-centre-artificial-intelligence) & [Web Intelligence Group](https://wi.cs.ucl.ac.uk/), Supervisor: <a href="https://aldolipani.com/" style="text-decoration: none;">Prof. Aldo Lipani</a>, United Kingdom.
- 2022.06 - 2023.08, Research Intern in South China University of Technology, Supervisor: <a href="https://ziqianzeng.github.io/" style="text-decoration: none;">Prof. Ziqian Zeng</a>, Guangzhou, China.

# 🎖 Honors and Awards
- *2025.10* <span style="color: black; font-weight: bold;">NeurIPS 2025 Scholar Award</span>
- *2023.12* AAAI-24 Student Scholarship
- *2023.11* <span style="color: black; font-weight: bold;">Top Ten Excellent Students Nomination Award</span> of South China University of Technology
- *2023.09* <span style="color: black; font-weight: bold;">China National Scholarship</span> (top 0.1%) <!-- SCUT First Prize Scholarship -->
- *2023.05* <span style="color: black; font-weight: bold;">Meritorious</span> Winner of The Mathematical Contest in Modeling (MCM)
- *2022.03* Kaggle Bronze medal (Top 6%) - Evaluating Student Writing: Analyze argumentative writing elements from students grades 6-12
- *2021.07* Kaggle <span style="color: black; font-weight: bold;">Silver</span> medal (Top 5%) - CommonLit Readability Prize: Rate the complexity of literary passages for grades 3-12 classroom use

# 🙋‍♂️ Academic Services {#academic-services}
- Program Committee: ICLR (2025, 2026), NeurIPS (2025, 2026), ICML (2026), ACL ARR (Feb. 2024 - Aug. 2026)

# 💬 Teaching
- Section Leader: Fall 2026 - DS-GA 1011 Fundamentals of Natural Language Processing - NYU Center for Data Science
- Section Leader: Fall 2026 - DS-GA 1006 Capstone Project and Presentation - NYU Center for Data Science
- Section Leader: Spring 2026 - DS-GA 1003 Machine Learning - NYU Center for Data Science
- Section Leader: Fall 2025 - DS-GA 1006 Capstone Project and Presentation - NYU Center for Data Science
  

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

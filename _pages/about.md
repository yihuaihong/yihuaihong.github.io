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



## Hello, I am Yihuai Hong, a fourth-year undergraduate student at South China University of Technology. My research interests lie in Natural Language Processing and Language Models, especially in the localization of different types of knowledge within language models. 
## These days I am very fortunate to work with <a href="https://mega002.github.io/" style="text-decoration: none;">Prof. Mor Geva Pipek</a> from Tel Aviv University and Google Reseach on LLM Unlearning. And starting from my second year, I was conducting research on the acceleration of Language Model's inference under the supervision of <a href="https://ziqianzeng.github.io/" style="text-decoration: none;">Prof. Ziqian Zeng</a>. Meanwhile, last summer I was visiting <a href="https://www.ucl.ac.uk/ai-centre/ucl-centre-artificial-intelligence" style="text-decoration: none;">UCL AI Centre</a> & <a href="https://wi.cs.ucl.ac.uk/" style="text-decoration: none;">Web Intelligence Group</a> as a research intern with a focus on the area of Knowledge Editing on Large Language Models, under the supervision of <a href="https://aldolipani.com/" style="text-decoration: none;">Prof. Aldo Lipani</a>. 
## I am also looking for a 24's Ph.D. opportunity now :)

# 🔥 News
- 2023.12: &nbsp;🎉🎉 My first work is accepted to <span style="color: black; font-weight: bold;">AAAI 2024</span> and I also won the <span style="color: black; font-weight: bold;">AAAI-24 Student Scholarship</span>! I am genuinely thankful to Prof. Zeng for guiding me and for her help along this path!


# 📝 Publications 


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='https://github.com/yihuaihong/ConceptVectors.github.io/blob/main/static/images/unlearning_concept_vectors_v3.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Intrinsic Evaluation of Unlearning Using Parametric Knowledge Traces](https://arxiv.org/abs/2406.11614) 

<span style="color: black; font-weight: bold;">Yihuai Hong</span>, Lei Yu, Shauli Ravfogel, Haiqin Yang, Mor Geva

Under Review, 2024.06 

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2024</div><img src='images/Main Structure.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[ConsistentEE: A Consistent and Hardness-Guided Early Exiting Method for
Accelerating Language Models Inference](https://arxiv.org/abs/2312.11882)

Ziqian Zeng<sup>*</sup>, <span style="color: black; font-weight: bold;">Yihuai Hong<sup>*</sup></span>, Huiping Zhuang, Cen Chen, HongLiang Dai

The 38th Annual AAAI Conference on Artificial Intelligence

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->

- We propose an early exiting method that can achieve consistency during training and inference by formulating the early exiting problem as a reinforcement learning problem.
- We propose a concept named Memorized Layer to measure the hardness of an instance. We incorporate it into the reward function to allow an instance to balance the accuracy and acceleration depending on individual hardness.
- The experimental results show that our method can outperform other baselines on natural language understanding and generation tasks.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/editing1.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Interpretability-based Tailored Knowledge Editing in Transformers](https://drive.google.com/file/d/1EQgIWd827Ezg25DmB_1g9w-P3O4gWFGX/view?usp=sharing)

<span style="color: black; font-weight: bold;">Yihuai Hong</span>, Aldo Lipani

Under Review, 2023.12  

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->

<!-- - We propose an early exiting method that can achieve consistency during training and inference by formulating the early exiting problem as a reinforcement learning problem.
- We propose a concept named Memorized Layer to measure the hardness of an instance. We incorporate it into the reward function to allow an instance to balance the accuracy and acceleration depending on individual hardness.
- The experimental results show that our method can outperform other baselines on natural language understanding and generation tasks. -->
</div>
</div>

<!-- - [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020** -->

# 📖 Educations
- 2020.09 - 2024.06(Expected), B.Eng. Candidate, School of Computer Science and Engineering, South China University of Technology

# 💻 Internships
- 2023.11 - 2024.01, Research Intern in [International Digital Economy Academy (IDEA)](https://www.idea.edu.cn/), Supervisor: <a href="https://hqyang.github.io/" style="text-decoration: none;">Prof. Haiqin Yang</a>, Shenzhen, China. 
- 2023.06 - 2023.12, Research Intern in [UCL AI Centre](https://www.ucl.ac.uk/ai-centre/ucl-centre-artificial-intelligence) & [Web Intelligence Group](https://wi.cs.ucl.ac.uk/), Supervisor: <a href="https://aldolipani.com/" style="text-decoration: none;">Prof. Aldo Lipani</a>, University College London, United Kingdom.
- 2022.06 - present, Research Intern in Shien-Ming Wu School of Intelligent Engineering, Supervisor: <a href="https://ziqianzeng.github.io/" style="text-decoration: none;">Prof. Ziqian Zeng</a>, South China University of Technology, China.

# 🎖 Honors and Awards
- *2023.12* AAAI-24 Student Scholarship
- *2023.11* <span style="color: black; font-weight: bold;">Top Ten Excellent Students Nomination Award</span> of South China University of Technology
- *2023.09* <span style="color: black; font-weight: bold;">China National Scholarship</span> (top 0.1%) <!-- SCUT First Prize Scholarship -->
- *2023.05* <span style="color: black; font-weight: bold;">Meritorious</span> Winner of The Mathematical Contest in Modeling (MCM)
- *2022.09* 37-Interactive Entertainment Yue+ Scholarship (Top 2 student of the academic year in the major) 
- *2021.07* Kaggle <span style="color: black; font-weight: bold;">Silver</span> medal (Top 5%) - CommonLit Readability Prize: Rate the complexity of literary passages for grades 3-12 classroom use Kaggle
- *2022.03* Kaggle Bronze medal (Top 6%) - Evaluating Student Writing: Analyze argumentative writing elements from students grades 6-12

# 📚 Patents 
- *2022.09* Self-supervised pre-training method, system and medium for Chinese Pinyin spelling correction.
IP No: 202211156374.3

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

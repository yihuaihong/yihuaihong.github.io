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

## My research story revolves around the Mechanistic Interpretability and Understanding of LLMs, especially about how "Knowledge" and "Reasoning" are formed and processed in LLMs, which can further be mapped to the other adjacent areas such as LLM Safety, Knowledge Editing, various reasoning capabilities of LLMs and so on.
- LLM Safety × Interpretability [ConceptVectors, EMNLP 2024 Main, Things in Progress]
- Knowledge Editing × Interpretability [EMNLP 2024 Main]
- Reasoning × Interpretability [Things in Progress..]
- LLM Efficient Inference × Interpretability [AAAI 2204 main track]
  
## I am looking for 25's Ph.D. opportunities and Research Internship now :)



# 🔥 News
- 2024.09: &nbsp;🎉🎉 My <span style="color: black; font-weight: bold;">two new 1st-author</span> papers both have been accepted to <span style="color: black; font-weight: bold;">EMNLP 2024 Main</span>! "Dissecting Fine-Tuning Unlearning in Large Language Models" and "Interpretability-based Tailored Knowledge Editing in Transformers"! Feel so grateful to all my mentors and collaborators. See you in Miami!
- 2024.06: &nbsp;🚀🚀 Please check my newest paper! <span style="color: black; font-weight: bold;">[Intrinsic Evaluation of Unlearning Using Parametric Knowledge Traces](https://arxiv.org/abs/2406.11614) </span> This is the <span style="color: black; font-weight: bold;">first-ever parametric LLM Unlearning Benchmark!</span> Thanks to the guidance from Prof. Mor Geva and the help of other collaborators.
- 2023.12: &nbsp;🎉🎉 My first work is accepted to <span style="color: black; font-weight: bold;">AAAI 2024 main track</span> and I also won the <span style="color: black; font-weight: bold;">AAAI-24 Student Scholarship</span>! I am genuinely thankful to Prof. Zeng for guiding me and for her help along this path!


# 📝 Research

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/unlearn_data_process2_page-0001.jpg' alt="sym" width="110%"></div></div>
<div class='paper-box-text' markdown="1">

[Intrinsic Evaluation of Unlearning Using Parametric Knowledge Traces](https://yihuaihong.github.io/ConceptVectors.github.io/)  

<span style="color: black; font-weight: bold;">Yihuai Hong</span>, Lei Yu, Shauli Ravfogel, Haiqin Yang, Mor Geva

[Website](https://yihuaihong.github.io/ConceptVectors.github.io) / [Arxiv](https://arxiv.org/pdf/2406.11614) / [GitHub](https://github.com/yihuaihong/ConceptVectors) / [Huggingface](https://huggingface.co/datasets/YihuaiHong/ConceptVectors) / [Twitter](https://x.com/YihuaiH91773/status/1803871246037164489)

Under Review, 2024.06 

- Our findings reveal that current unlearning methods only modify the model's behavior without truly erasing the encoded knowledge in its parameters.
- To address this, we present the ConceptVectors Benchmark, where each vector is closely tied to a specific concept. It is consist of 285 concept vectors on two open-source LLMs.
- Directly ablating these vectors demonstrably removes the associated knowledge from the LLMs and significantly reduces their susceptibility to adversarial manipulation.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2024</div><img src='images/Main Structure.png' alt="sym" width="110%"></div></div>
<div class='paper-box-text' markdown="1">

[ConsistentEE: A Consistent and Hardness-Guided Early Exiting Method for
Accelerating Language Models Inference](https://arxiv.org/abs/2312.11882)

Ziqian Zeng<sup>*</sup>, <span style="color: black; font-weight: bold;">Yihuai Hong<sup>*</sup></span>, Huiping Zhuang, Cen Chen, HongLiang Dai

[Arxiv](https://arxiv.org/abs/2312.11882) / [GitHub](https://github.com/ZeroNLP/ConsistentEE)

<span style="color: black; font-weight: bold;">AAAI 2024 Main Track</span>

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->

- We propose an early exiting method that can achieve consistency during training and inference by formulating the early exiting problem as a reinforcement learning problem.
- We propose a concept named Memorized Layer to measure the hardness of an instance. We incorporate it into the reward function to allow an instance to balance the accuracy and acceleration depending on individual hardness.
- The experimental results show that our method can outperform other baselines on natural language understanding and generation tasks.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2024 Main</div><img src='images/main structure_page-0001.jpg' alt="sym" width="110%"></div></div>
<div class='paper-box-text' markdown="1">

[Interpretability-based Tailored Knowledge Editing in Transformers](https://drive.google.com/file/d/1EQgIWd827Ezg25DmB_1g9w-P3O4gWFGX/view?usp=sharing)

<span style="color: black; font-weight: bold;">Yihuai Hong</span>, Aldo Lipani

<span style="color: black; font-weight: bold;">EMNLP 2024 Main</span>

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->

Our work explores the instability in in-context learning-based Knowledge Editing outcomes, providing insights into its reasons and distinctions from other Knowledge Editing methods. Leveraging findings on the critical role of feed-forward MLPs in decoder-only models, we propose a tailored knowledge editing method, TailoredKE, that considers the unique information flow of each sample. Model interpretability reveals diverse attribute recall across transformer layers, guiding edits to specific features at different depths and mitigating over-editing issues.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2024 Main</div><img src='images/experiment structure_page-0001.jpg' alt="sym" width="110%"></div></div>
<div class='paper-box-text' markdown="1">

[Dissecting Fine-Tuning Unlearning in Large Language Models]()

<span style="color: black; font-weight: bold;">Yihuai Hong</span>, Yuelin Zou, Lijie Hu, Ziqian Zeng, Di Wang, Haiqin Yang

<span style="color: black; font-weight: bold;">EMNLP 2024 Main</span>

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->

In this paper, we delve into the limitations of fine-tuning-based unlearning through activation patching and parameter restoration experiments. Our findings reveal that these methods alter the model's knowledge retrieval process, rather than genuinely erasing the problematic knowledge embedded in the model parameters. Furthermore, behavioral tests demonstrate that the unlearning mechanisms inevitably impact the global behavior of the models, affecting unrelated knowledge or capabilities.
</div>
</div>

<!-- - [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020** -->

# 📖 Educations
- 2020.09 - 2024.06, Bachelor of Engineering, School of Computer Science and Engineering, South China University of Technology

# 💻 Internships
- 2024.09 - present, Research Intern in University of Toronto, Supervisor: <a href="https://zhijing-jin.com/fantasy/" style="text-decoration: none;">Prof. Zhijin Jin</a>, Canada(Remote). 
- 2024.08 - present, Research Intern in [Alibaba DAMO Academy](https://github.com/DAMO-NLP-SG), Supervisor: <a href="https://lidongbing.github.io/" style="text-decoration: none;">Dr. Lidong Bing</a> and <a href="https://isakzhang.github.io" style="text-decoration: none;">Dr. Wenxuan Zhang</a>, Hangzhou, China.
- 2024.02 - 2024.08, Research Intern in Tel Aviv University, Supervisor: <a href="https://mega002.github.io/" style="text-decoration: none;">Prof. Mor Geva</a>, Israel(Remote). 
- 2023.11 - 2024.02, Research Intern in [China International Digital Economy Academy](https://www.idea.edu.cn/), Supervisor: <a href="https://hqyang.github.io/" style="text-decoration: none;">Prof. Haiqin Yang</a>, Shenzhen, China. 
- 2023.06 - 2023.12, Research Intern in [UCL AI Centre](https://www.ucl.ac.uk/ai-centre/ucl-centre-artificial-intelligence) & [Web Intelligence Group](https://wi.cs.ucl.ac.uk/), Supervisor: <a href="https://aldolipani.com/" style="text-decoration: none;">Prof. Aldo Lipani</a>, United Kingdom.
- 2022.06 - 2023.08, Research Intern in South China University of Technology, Supervisor: <a href="https://ziqianzeng.github.io/" style="text-decoration: none;">Prof. Ziqian Zeng</a>, Guangzhou, China.

# 🎖 Honors and Awards
- *2023.12* AAAI-24 Student Scholarship
- *2023.11* <span style="color: black; font-weight: bold;">Top Ten Excellent Students Nomination Award</span> of South China University of Technology
- *2023.09* <span style="color: black; font-weight: bold;">China National Scholarship</span> (top 0.1%) <!-- SCUT First Prize Scholarship -->
- *2023.05* <span style="color: black; font-weight: bold;">Meritorious</span> Winner of The Mathematical Contest in Modeling (MCM)
- *2021.07* Kaggle <span style="color: black; font-weight: bold;">Silver</span> medal (Top 5%) - CommonLit Readability Prize: Rate the complexity of literary passages for grades 3-12 classroom use Kaggle
- *2022.03* Kaggle Bronze medal (Top 6%) - Evaluating Student Writing: Analyze argumentative writing elements from students grades 6-12

# 💬 Academic Services 
- Program Committee: ICLR (2025), AAAI (2024), ACL ARR (Feb. 2024 - June. 2024)
  
# 📚 Patents 
- *2022.09* Self-supervised pre-training method, system and medium for Chinese Pinyin spelling correction.

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

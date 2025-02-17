---
title: "Glaucoma Severity Prediction Using RETFound"
collection: publications
category: manuscripts
# permalink: /publication/2010-10-01-paper-title-number-2
excerpt: 'Glaucoma is a leading cause of irreversible blindness, necessitating early and precise detection for effective intervention. This project focuses on developing a scalable and clinically deployable ML model for predicting glaucoma severity, leveraging RETFound, a foundation model based on the Vision Transformer (ViT) architecture.'
date: 2024-10-15
# venue: 'Journal 1'
# slidesurl: 'http://academicpages.github.io/files/slides2.pdf'
# paperurl: 'http://academicpages.github.io/files/paper2.pdf'
# citation: 'Your Name, You. (2010). &quot;Paper Title Number 2.&quot; <i>Journal 1</i>. 1(2).'
---

The model is trained on 80,000+ diverse and unbalanced retinal scans sourced from LA County and UCSD datasets, ensuring robustness across varied patient demographics. To enhance interpretability and trust in clinical settings, the study integrates explainability techniques such as Integrated Gradients, LIME, Grad-CAM, and Occlusion, identifying critical features influencing model decisions.

Evaluation is conducted using AUROC and Jaccard metrics, rigorously comparing model predictions against gold standard medical annotations. The research is conducted in collaboration with USC, UCSD, and LA County, involving faculty, physicians, and public health experts to ensure alignment with real-world clinical needs.

This work aims to bridge the gap between cutting-edge AI and clinical ophthalmology, paving the way for scalable deployment in numerous clinics and improving early glaucoma detection and management.


![Model architecture](/portfolio/images/vit_architecture.jpg)
![Motion analysis](/portfolio/images/fundus.png)
![Motion analysis](/portfolio/images/XAI.png)
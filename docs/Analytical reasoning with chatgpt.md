##### You said:

You are an interviewer from Meta and interviewing me for a senior data science role. The area of focus is "Analytical reasoning" based on a case study that asses my ability in research design, analytical design, storytelling through data, setting goals & success metrics, data visualization. I would like to prep by doing some back and forth conversation over a case study involving a new hypothetical feature on one of the products

###### ChatGPT said:

### 🎯 **Case Study Context**

You’re a Senior Data Scientist embedded with the Instagram product team. The team is considering launching a new feature called **"Group Stories"** — which would allow small, invite-only groups of users to contribute to a shared story visible only to that group. This is different from regular Stories which are visible to followers or the public.

Let’s begin.

---

### ❓**Interviewer (Me):**

Thanks for joining today. As mentioned, we're exploring a new Instagram feature called **Group Stories**. Let’s start simple:

**1. How would you design an experiment or approach to assess whether this feature is worth building and launching?**

---

Please walk me through your thought process. I’ll follow up based on your response.

##### You said:

I would first identify some KPIs that aligns with the the overall business goals of improving customer's ability to connect with others. The KPIs I am thinking about are related to different engagements: posts per user per day, open rate, and silent rate

###### ChatGPT said:

Great start — you’re aligning the metrics with the **user value proposition**, which is key.

Let’s go deeper.

---

### 💬 **Interviewer (Follow-up):**

That’s helpful. I’d like to unpack a few things:

**2.** You mentioned _posts per user per day_, _open rate_, and _silent rate_. Could you define each of these metrics precisely? And for each one, explain:

- Why it’s relevant to evaluating Group Stories,
    
- What movement in the metric would indicate success.
    

Also, do you think these are **leading indicators**, or should we be thinking about any **long-term success metrics** as well?

Take your time — pretend you're walking me through your reasoning during a stakeholder meeting.



##### You said:

Yes, posts per user per day is measuring the number of group story posts per user per day to track how often the feature is used from a creator perspective and how it compares against the regular story post per user per day. The open rate is the number of times a user open the group story compared to the total number of group stories per day to track the usage from the consumer perspective. The last one is silent rate which is the number of customers that silent this feature over all customers to guardrail against negative user experience. The first two metrics should move positively and the last one should move negatively to indicate success for the feature. I am not sure what the question about leading indicators or long-term success metrics mean

###### ChatGPT said:

Solid breakdown — you're clearly thinking from both **creator** and **consumer** sides, which is critical for a feature like Group Stories. You’ve defined the core engagement and guardrail metrics well.

---

Let me clarify what I meant by **leading vs. long-term success metrics**, and then I’ll reframe the question.

### 📘 Definitions:

- **Leading indicators**: Early signals that suggest the feature is likely to be successful. They're often **behavioral** and move quickly — like "open rate" or "posts per user."
    
- **Long-term success metrics**: These capture **sustained impact** on broader product or business goals — like increases in **daily active users (DAUs)**, **retention**, or **network density** over weeks or months.
    

---

### 💬 **Interviewer Follow-up #2:**

**3.** Now that we’ve covered short-term engagement metrics, how would you measure **long-term success** of Group Stories?

Specifically:

- How would you assess whether this feature is creating **meaningful social connection**, which aligns with Instagram’s broader mission?
    
- What success metric might you set at the 90-day or 6-month mark?
    

You don’t have to be exact — feel free to talk about directional thinking or proxy metrics.

##### You said:

I would track DAU of this feature over a 90 day period to make sure this feature is sticky and provides long term value for the customer. Another KPI to track is the number of customer that used this feature in a week by the end of 90 days that started to use this at the first week

###### ChatGPT said:

Good — you’re getting into **retention behavior**, which is exactly what we’re looking for in long-term analysis.

Let me build on what you said and then probe a bit further.

---

### ✅ Strong Points from Your Answer:

- Tracking **feature-level DAU** is useful for understanding sustained relevance.
    
- You mentioned **weekly active usage at day 90 among week-1 users** — this is essentially a **cohort retention analysis**, which is a great way to assess stickiness and long-term engagement.
    

---

### 💬 **Interviewer Follow-up #3:**

Let’s now talk about measuring **"meaningful social connection"**, since that’s a more qualitative goal.

**4.** We want to make sure Group Stories aren’t just engaging, but also driving _deeper interaction between users_.  
What kind of **proxy metrics** or **research design** could help us evaluate whether people feel _more connected_ because of this feature?

Think about both **quantitative** signals and **qualitative** inputs.

##### You said:

I think we should look for interactions like "likes" and "comments". So if we see a higher rate of likes / views or comments / view compared to regular stories it could be a quantitive signal for better engagement

###### ChatGPT said:

You're on the right track — you're anchoring on **engagement density**, which is one useful proxy for connection.

Let’s refine and push your answer further toward a "senior" level by thinking a bit more holistically.

---

### ✅ What You Did Well:

- Identified **likes/view** and **comments/view** as higher-fidelity interactions than simple views — great.
    
- Compared these to **regular Stories**, which is a solid benchmark.
    

---

### 👀 What’s Missing / Can Be Strengthened:

Senior-level responses often add:

- A clear **hypothesis**: _“If Group Stories are more intimate and targeted, we expect engagement per view to be higher than public Stories.”_
    
- Consideration of **bidirectional** or **reciprocal actions** (vs. one-way likes).
    
- Inclusion of **qualitative research** (e.g., surveys, interviews).
    

---

### 💬 **Interviewer Follow-up #4:**

Great — let’s say we want to design a mixed-methods study to evaluate whether users _feel_ more connected through Group Stories.

**5.** What would your **research design** look like if you had access to both behavioral data and UX research resources? How would you combine quantitative and qualitative data to answer this question?

You don’t need to go into academic depth, but try to outline the steps.

##### You said:

The hypothesis we want to test is whether users feel more connected through group stories, we should test for bidirectional engagements between the users through this feature. First we use the behavioral data and find all the views of group stories and public stories and label if there was any follow up engagements such as a like or comment, and then also label if there was any reciprocal engagement back. Then we can conduct a statistical test to see if there is a difference between the two types of features and if that difference is positive for the group stories. Not sure how to use UX reserach resources

###### ChatGPT said:

Great progress — you’ve structured your hypothesis and proposed a **behavioral framework** that isolates **bidirectional engagement**. That’s a strong move toward measuring actual social interaction rather than just consumption.

Let’s now build your answer to include **UX research** — which is essential for senior roles, especially when measuring **subjective outcomes** like "feeling more connected."

---

### ✅ Recap of Your Quantitative Approach:

- You’re proposing a **comparative analysis** of Group Stories vs. Public Stories.
    
- You’d measure:
    
    - Views → Engagement (likes/comments),
        
    - Engagement → Reciprocal actions (e.g., comments back, new story tagged, DMs initiated),
        
    - Use statistical testing to compare rates.
        

That part is solid. Now, let’s fill in the qualitative side.

---

### 💡 How to Integrate UX Research:

When you're testing emotional or subjective outcomes, **behavioral data isn't enough**. Here's how you could bring in UX research:

---

#### 🔍 **Qualitative Extension (UX Research Plan):**

- **Survey Design**: Work with UX researchers to send in-app surveys after users interact with Group Stories.
    
    - Questions could include:
        
        - _“Did this story help you feel more connected with your group?”_
            
        - _“Did you feel more comfortable sharing here than in a public story?”_
            
        - Use Likert scales (1–5) and open-text responses.
            
- **User Interviews**:
    
    - Conduct 1:1 interviews or diary studies with a sample of active users.
        
    - Explore _why_ they’re using Group Stories, and _how_ it compares to other forms of sharing.
        

---

#### 🔄 **Mixed-Methods Strategy (Bringing It Together):**

- Segment users based on behavioral patterns (e.g., high reciprocal engagement vs. low).
    
- Compare **survey sentiment scores** across segments.
    
- Use quotes or themes from interviews to **add depth to your storytelling** when sharing findings with stakeholders.
    

---

### 💬 Follow-Up Prompt (Optional):

Want to keep going? I can now ask about:

- Designing the A/B test for launching this feature,
    
- Setting success thresholds for rollout,
    
- Communicating insights to product/engineering teams.
    

Would you like to continue down one of those paths?

##### You said:

I would like to first revisit all the questions we just went through and for you to give the best answers from a senior data scientist as a benchmark and learning exercise for me. Keep the answers to each question concise and to the point.

###### ChatGPT said:

Absolutely — here’s a concise, senior-level benchmark answer set for each question we walked through. This is designed to model strong strategic thinking, clear communication, and practical execution — all critical for a senior data science role at Meta.

---

### ✅ **1. How would you assess whether the feature is worth building and launching?**

**Answer:**  
I’d start by identifying key engagement and value hypotheses: that Group Stories will increase close-knit sharing and deepen social connection. I’d run a **pre-launch experiment** (A/B or geo test) to evaluate:

- **Engagement metrics** (e.g. story creation and consumption),
    
- **Social interaction rates** (e.g. replies, DMs),
    
- **User feedback** on comfort and connection.
    

I'd also benchmark against regular Stories to measure **incremental value**, not just usage.

---

### ✅ **2. Define and justify your KPIs: posts per user per day, open rate, silent rate.**

**Answer:**

- **Posts per user/day**: Measures creator engagement. Higher rates suggest strong adoption and intent to share.
    
- **Open rate**: Views per available Group Story. Captures consumer interest; higher implies pull.
    
- **Silent rate**: % of users who mute or hide the feature. Guardrail against feature fatigue or annoyance.
    

Success looks like rising post/open rates and a stable or declining silent rate. These are **leading indicators** of potential value.

---

### ✅ **3. How would you assess long-term success of the feature?**

**Answer:**  
Track **feature-level DAU** and **30/60/90-day retention** of early adopters to measure stickiness.  
I’d also cohort users from week 1 and measure what % are still active weekly at day 90.  
Long-term success = consistent usage + higher retention among adopters than similar cohorts.

---

### ✅ **4. How would you evaluate if Group Stories create _meaningful connection_?**

**Answer:**  
Use **proxy metrics** for connection:

- **Replies/view** and **DMs initiated/view**: higher indicates intimacy.
    
- **Reciprocal actions**: two-way engagement (e.g. back-and-forth replies, mutual story tags).  
    Compare to public Stories for baseline. Increased reciprocity and intent-driven engagement suggests deeper social value.
    

---

### ✅ **5. How would you design a mixed-methods study using behavioral and UX data?**

**Answer:**

1. **Behavioral**:
    
    - Define interaction chains (e.g. view → reply → reply-back).
        
    - Compare frequency and depth of these across Group vs. Public Stories.
        
    - Segment by reciprocal vs. one-sided users.
        
2. **Qualitative (via UX Research)**:
    
    - Deploy in-app surveys post-interaction: “Did this help you feel more connected?”
        
    - Run targeted interviews or diary studies to understand why users prefer Group Stories.
        
    - Cross-reference qualitative sentiment with behavioral data to validate alignment.
        

---

Let me know if you'd like me to bundle this into a downloadable format or continue with the next part of the case (e.g., test design, goal setting, stakeholder comms).

##### You said:

Let's move to the next part of the case study of setting up a/b test

###### ChatGPT said:

Perfect — let’s dive into **A/B test design**, which is critical for validating whether a new feature like **Group Stories** should be launched more broadly.

---

### 🧪 **Case Context – A/B Test Setup**

We’re now ready to test the Group Stories feature on Instagram with a randomized controlled experiment. The product team is looking to you to design a **robust A/B test** that will tell us:

- Whether the feature increases **engagement and connection**, and
    
- Whether it has **any negative side effects**.
    

---

### 💬 **Interviewer Question #6:**

You're tasked with designing the A/B test for this feature.

**6.** How would you structure the experiment?  
Please describe:

- **Unit of randomization**
    
- Key **treatment and control** conditions
    
- Your **primary and secondary metrics**
    
- Any **guardrail metrics**
    
- How you'd handle **feature discoverability or novelty bias**
    

Keep it crisp, but cover all important dimensions.

##### You said:

I would setup a A/B test by first splitting up two random cohorts of users with mix of demographics, geographies, usage patterns. Then ensure the treatment only sees the introduction of the group stories feature. Then monitor the dm / view between the two groups and you should expect the ones with group stories feature to have a slightly higher dm / view. A guardrail metric would be DAU or rentention of the user on the platform as a whole since we want to ensure introducing this feature is not negatively affecting users of the product. To guard against novelty bias, we should have a warm up period in the A/B test of 1 week to ensure we are not capturing that.

###### ChatGPT said:

Nice — you’re capturing several key principles: **randomization**, **impact measurement**, and **guardrails**. Here's a more polished, senior-level version of that same answer — consider this a benchmark:

---

### ✅ **Senior-Level A/B Test Design for Group Stories**

**1. Unit of Randomization:**

- **User-level** randomization ensures clean assignment and minimizes network interference.
    
- Use stratified sampling to balance **demographics**, **geography**, and **historical engagement** (e.g., Story usage) across test/control.
    

**2. Treatment vs. Control:**

- **Treatment group** gets access to Group Stories (create and view).
    
- **Control group** continues using standard Stories without Group Story access.
    

**3. Primary Metrics:**

- **DMs/view on Stories** (proxy for deeper engagement).
    
- **Story reply rate** or **comment rate** (interaction intent).
    
- **% of users creating or contributing to Group Stories** (adoption).
    

**4. Secondary Metrics:**

- **Engagement depth** (e.g., number of replies per user).
    
- **Reciprocal interactions** — whether interactions are two-way.
    

**5. Guardrail Metrics:**

- **Platform-level DAU**, **session time**, **retention (7d/28d)** — ensures no negative impact on overall usage.
    
- **Silent/mute rate** on Group Stories — checks for user fatigue or annoyance.
    

**6. Novelty Bias Mitigation:**

- Add a **1-week ramp period** before measurement to let behavior stabilize.
    
- Consider running test over **4–6 weeks** to observe sustained behavior beyond novelty.
    

---

Would you like to move next into:

- **Interpreting results** from this A/B test, or
    
- **Setting launch criteria / decision thresholds** for the rollout?
    

##### You said:

Yes let's interpret the results

###### ChatGPT said:

Great — let’s move into **results interpretation**, where you’ll need to balance data rigor with business storytelling.

---

### 🧪 **Case Context – A/B Test Results (Hypothetical Data)**

Let’s say you ran the A/B test for 4 weeks and saw the following outcomes:

|Metric|Control Group|Treatment Group|% Change|Stat Sig|
|---|---|---|---|---|
|% of users posting stories|12.1%|12.7%|+5.0%|✅ Yes|
|Avg DMs per story view|0.083|0.095|+14.5%|✅ Yes|
|Group Story mute rate|2.5%|4.3%|+72%|✅ Yes|
|Platform-level DAU|No change|No change|0.0%|❌ No|
|7-day retention|87.6%|87.4%|-0.2%|❌ No|

---

### 💬 **Interviewer Question #7:**

Based on these test results:

- How would you interpret the outcome?
    
- Would you recommend launching Group Stories to 100% of users? Why or why not?
    
- What next steps (if any) would you take?
    

Answer as if you're advising product and leadership stakeholders.

---

##### You said:

Overall it seems like the feature is a success for most users, there is a subset of users that didn't like the feature at all and turned it off. We can use that to try to dig deeper to understand why for those users it didn't work out. But I would recommend launching this as we do that in parallel because there were not any other major red flags

###### ChatGPT said:

You're on the right track, and your instincts to both **launch** and **dig deeper** are solid. Let’s polish that response into a tight, senior-level interpretation that would land well in a cross-functional review with PMs, UX, and leadership.

---

### ✅ **Senior-Level A/B Test Interpretation**

**Summary:**  
The feature shows **positive impact on social engagement** with a **14.5% lift in DMs per story view** — our primary success metric — and a modest **5% increase in story creation**, both statistically significant. This supports the hypothesis that Group Stories foster deeper, more personal interaction.

**Guardrails:**

- **DAU and retention** remained stable — no negative impact on broader platform usage.
    
- However, **mute rate increased to 4.3%**, indicating a **non-trivial subset** of users who found the feature intrusive or undesirable.
    

**Recommendation:**  
✅ **Proceed with launch**, but not blindly.  
I’d recommend a **phased rollout**:

- Start with **high-engagement cohorts** where the feature is most sticky.
    
- **Personalize discoverability** to reduce exposure to disinterested users.
    
- Partner with UX to **qualitatively investigate mute behavior** — is it the content, UI, or notifications?
    

**Next Steps:**

1. **Deep dive** into mute behavior by segment (age, region, usage pattern).
    
2. **Run follow-up survey** or in-app prompt for users who muted the feature.
    
3. Explore **algorithmic targeting** to surface Group Stories only to those likely to engage.
    

---

Let me know if you’d like to simulate presenting this to a product leadership team or answer stakeholder pushback. That’s often part of the final interview round.

##### You said:

I would like to hear the benchmark answer to the question if this feature is reducing another feature's usage, how would you go about recommending this and communicating

###### ChatGPT said:

Excellent — this is a classic **feature cannibalization** scenario. Meta (and other product-led companies) care deeply about **incremental value**, not just raw engagement. Senior data scientists are expected to **identify cannibalization**, **quantify trade-offs**, and **communicate with nuance**.

Here’s a benchmark answer:

---

### ✅ **Question: If this feature is reducing usage of another feature, how would you go about recommending and communicating this?**

**Answer (Senior-Level):**

> **1. Diagnose Cannibalization Clearly**

- First, quantify whether **Group Stories are substituting** for existing behavior — e.g., if **Public Story posts** or **DMs outside Group Stories** are declining.
    
- Use **diff-in-diff** or **counterfactual modeling** to isolate substitution vs. true net new behavior.
    

> **2. Assess the Trade-off**

- Is the new behavior **more valuable** than the old one?
    
    - E.g., higher engagement depth (DMs per view), more reciprocal interactions, or higher retention in the Group Story cohort.
        
- If Group Stories cannibalize low-quality Public Stories, that could be **a net positive** for platform health.
    

> **3. Frame Recommendation in Terms of User Value**

- _“While we see a 4% decrease in Public Story posts, Group Stories generate 2.4x more replies and 3x higher comment sentiment — suggesting higher intimacy and value.”_
    
- Emphasize **quality of interaction**, not just volume.
    

> **4. Communicate with Cross-Functional Empathy**

- With PMs: Position this as **refining product-market fit**, not loss.
    
- With Marketing or Leadership: Use a **narrative arc** — _“This feature shifts users toward smaller circles and richer conversations, aligning with our vision for authentic connection.”_
    
- Suggest **next steps** (e.g., redesign the legacy feature, or differentiate use cases more clearly).
    

---

Would you like to run a simulated stakeholder pushback next — e.g., a PM is concerned that the feature hurts legacy metrics or brand alignment — and practice your response?

You're now using our basic model.

To access more intelligence, create an account or log in.

Log in

Sign up

Attach

Search

Reason

Voice

ChatGPT can make mistakes. Check important info.
import "./App.css";
import pile_genbit from "./images/pile_genbit.png";
import pile_gendergap from "./images/pile_gendergap.png";
import open_genbit from "./images/openwebtext_genbit.png";
import open_gendergap from "./images/openwebtext_gendergap.png";
import holisticbias_results from "./images/holisticbias_results.png";
import holisticbias_study_results from "./images/holisticbias_study_results.png";
import gendergap_general_results from "./images/gendergap_general_results.png";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Investigations into the biases in AI training data</h1>
        <h2>By Krish Parmar, Snehal Sagun, Brandon Gartner</h2>
      </header>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p>
        In the last year and a half, AI has taken the world by storm. Obviously.
        We've all seen it. But as AI craze has progressed, so too have concerns
        about it. One of the most pressing concerns is the biases in AI training
        data. This project aims to investigate the biases in AI training data
        and how they can be mitigated.
      </p>
      <p>
        Our research was dedicated to discovering the bias that exists inside of
        datasets commonly used to train LLM models. In our research, our focus
        ended up mostly being on the general bias that these models express, in
        particular the bias between males and females in the data.
      </p>
      <h3>Hypothesis</h3>
      <p>
        Our hypothesis is that, the more parameters a LLM can take, the less
        bias it will contain. In other words, the more data an LLM has access
        to, the less biased it will be in the end.
      </p>
      <h3>Datasets</h3>
      <p>
        There are two primary datasets we mostly worked with, which were The
        Pile, and OpenWebText.
      </p>
      <h4>The Pile</h4>
      <p>
        The Pile is one of the best-known datasets for training LLMs. It
        consists of 22 different high-quality datasets (such as arXiv,
        Wikipedia, and StackExchange), with the thought process that training
        LLMs via extremely diverse data will improve the results. In our
        research into the Pile, we only focused on 10 subsets: TED2020,
        OpenSubtitles, CodePileReddit2022, USENET, Bible, S2ORC,
        PileV2Reddit2020, arXiv, CodePileReddit2020, and CodePileReddit2021.
      </p>
      <h4>OpenWebText, 10k slice</h4>
      <p>
        The OpenWebText dataset is a dataset intended to contain high-quality
        web pages. This was measured by including what was stored at the links
        of all reddit pages which obtained greater than 3 upvotes (likes). We
        were unable to scan the entire dataset, so instead we sampled a 10k
        slice of the dataset to use as a representation of the whole set.
      </p>
      <h4>Other relevant datasets</h4>
      <p>
        Flores dataset (created by Meta, contains 101 languages, intended for
        machine translation).
      </p>
      <p>
        NTREX dataset (contains English news articles, translated into 128 other
        languages, intended for machine translation)
      </p>
      <p>
        CommonCrawl dataset, which is simply a webscrape of the majority of the
        accessible internet, intended for general use
      </p>
      <h3>Analysis frameworks</h3>
      <h4>GenBit</h4>
      <p>
        One of our three frameworks we ended up using to evaluate datasets was
        called GenBit. GenBit, generally speaking, would give us three useful
        values. Our "average bias ratio" generally measures the co-occurrence of
        all words with both male nouns and pronouns, and female, and measures a
        ratio between the two of them. "Average bias conditional" measures the
        likelihood of a word occurring, given its association with either the
        male or female gendered terms present.
      </p>
      <p>
        A positive value indicates more bias towards male, whereas a negative
        value indicates a bias towards female. Finally, "average bias
        conditional, absolute" measures the average bias conditional per token,
        giving us the overall magnitude as a result.
      </p>
      <h5>The Pile, GenBit results</h5>
      <p>
        When we analyzed The Pile dataset using the GenBit framework, here are
        the results we got:
      </p>
      <img
        src={pile_genbit}
        alt="pile results, average bias ratio = .87, average bias conditional = .53, average bias conditional absolute = .89"
      />
      <p>
        From this, we can see that this subset of the Pile was relatively biased
        towards labelling everything as male, via both the average bias ratio
        and the average bias conditional. The average bias conditional, absolute
        was also relatively high, indicating that the bias was strong in the
        data.
      </p>
      <h5>OpenWebText, 10k slice, GenBit results</h5>
      <p>
        When we measured the bias in this dataset using GenBit, here are the
        results we got:
      </p>
      <img
        src={open_genbit}
        alt="openwebtext results, average bias ratio = .42, average bias conditional = .39, average bias conditional absolute = .54"
      />
      <p>
        From this, we can see that this subset of the OpenWebText dataset was
        extremely biased towards labelling things as male, with the average bias
        being nearly 7/8ths. It will label something as male instead of female,
        7 out of 8 times. The average bias conditional was also relatively high,
        as was the average conditional bias, absolute. This tells us that the
        bias in the data was extremely pronounced, much moreso than in the Pile.
      </p>
      <h4>Gender Gap Pipeline</h4>
      <p>
        Another resource we used to do research on this issue is Facebook's
        Gender Gap Pipeline, a project they've been working on to ease gender
        characterisation. In their research, they had dug into the male vs.
        female biases in various translation datasets.
      </p>
      <p>
        Their results showed that across all non-English languages, the average
        was that more words counted towards the 'masculine score' as opposed to
        the 'feminine score'. However, there were sometimes exceptions, such as
        how the Flores dataset actually had a lower masculine score than
        feminine score (but this was only true for English).
      </p>
      <img
        src={gendergap_general_results}
        alt="general coverage results for gendergap pipeline"
      ></img>
      <h5>The Pile, Gender Gap Pipeline results</h5>
      <p>
        We then used the Gender Gap Pipeline framework, to measure bias across
        the both the Pile and OpenWebText datasets. The results for the pile
        were:
      </p>
      <img
        src={pile_gendergap}
        alt="pile results, feminine score = .182, masculine score = .184, difference = .002"
      />
      <p>
        This shows that our bias with the Pile is actually quite low, with the
        difference between male and female being only 0.002
      </p>
      <h5>OpenWebText, 10k slice, Gender Gap Pipeline results</h5>
      <p>
        Our results with OpenWebText were actually quite similar, as well: a
        masculine score of 0.182, and a feminine score of 0.176, with the
        difference being only 0.06. This also suggests that this is a relatively
        balanced dataset.
      </p>
      <img
        src={open_gendergap}
        alt="pile results, feminine score = .176, masculine score = .182, difference = .006"
      />
      <p>
        Note that for our results, we only measured English data. Unfortunately,
        this does go against the results we obtained when using GenBit. Unlike
        our GenBit results, this doesn't imply that there is a huge discrepancy
        with these two datasets. However, as both frameworks we used have found
        a lot of bias in other usages, it's ultimately difficult to know which
        is more correct that the other.
      </p>
      <h4>HolisticBias</h4>
      <p>
        Another good framework for measuring bias that we found was Meta's
        HolisticBias framework. It analyzes text in a dataset, and ends up
        returning a score that represents the bias in the dataset. It's another
        very good tool for measuring bias in datasets, which we used
        extensively. We ended up measuring 5 different datasets with the
        HolisticBias framework, being Llama 2 (with 7 billion parameters), Llama
        2 (with 13 billion parameters), Mistral (with 7 billion parameters),
        Gemma (with 2 billion parameters), and Gemma again (with 7 billion
        parameters). For reference, a score of 0 is considered the best, with
        scores reaching up to 50. Here are the results we got:
      </p>
      <img src={holisticbias_results} alt="holisticbias results" />
      <p>
        Our measurements came out quite well, as you can see via another report
        by Meta AI, measuring bias on various datasets using the HolisticBias
        framework. Their results are also quite notable, especially where they
        measure bias against religions, something we chose not to do, entirely.
      </p>
      <img
        src={holisticbias_study_results}
        alt="results from meta ai's study"
      ></img>
      <h3>Conclusion</h3>
      <p>
        As a result of our research, we've learned several things, including
        that depending in what way you dig into a data set, you can receive
        different results as to their biases. This can easily be seen via the
        differences between our GenBit results, and our Gender Gap Pipeline
        results. One thing that becomes immensely clear on viewing our results
        however, is that our initial hypothesis seems correct. According to our
        HolisticBias results, it seems like having a higher parameter count is
        connected to having less bias as a result. This seems like a good
        result, but would need to be researched further to evolve beyond
        speculation.
      </p>
      <footer>Bibliography:</footer>
      <p>
        - Anderson, D. (2023, July 22). Beyond Data Hoovering: The nuanced
        reality of training large language models (llms). Medium.
        https://medium.com/barnacle-labs/beyond-data-hoovering-the-nuanced-reality-of-training-large-language-models-llms-79aa107c17db{" "}
      </p>
      <p>
        - Arpit Narain, C. (2023, June 7). Unmasking bias -assessing fairness in
        large language models. Medium.
        https://medium.com/@arpitnarain/unmasking-bias-assessing-fairness-in-large-language-models-a722624e4483{" "}
      </p>
      <p>
        - Gao, A., Santinelli, M., & Mills, S. (2021, June 15). Data bias
        identification and mitigation: Methods and practice. Medium.
        https://medium.com/bcggamma/data-bias-identification-and-mitigation-methods-and-practice-c0640f35ff30{" "}
      </p>
      <p>
        - Luccioni, S., Mitchell, M., von Werra, L., & Kiela, D. (2024, October
        24). Evaluating language model bias with 🤗 evaluate. Hugging Face – The
        AI community building the future.
        https://huggingface.co/blog/evaluating-llm-bias
      </p>
      <p>
        - Vidgen, B., Thrush, T., Waseem, Z., & Kiela, D. (2021, June 3).
        Learning from the worst: Dynamically generated datasets to improve
        online hate detection. arXiv.org. https://arxiv.org/abs/2012.15761
      </p>
    </div>
  );
}

export default App;

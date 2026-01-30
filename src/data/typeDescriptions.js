export const typeDescriptions = {
  FUGO: {
    label: "The Builder",
    tagline: "Fast, unprecedented, optimistic, and ready to steer",
    description:
      "You're in the cockpit. You believe AGI-level systems are coming within the decade, that they represent something humanity has never faced before, and that the outcome will be overwhelmingly positive—if the right people are making the right calls right now. You probably see yourself as one of those people, or at least want to be in the room. This is the default worldview at Anthropic, OpenAI's public messaging, and Google DeepMind. It's Dario Amodei's \"Machines of Loving Grace\" essay. It's Sam Altman's Congressional testimony energy: \"this technology is going to be incredible and we need governance.\" You likely read the Alignment Forum, follow AI Twitter closely, and get genuinely excited by capability breakthroughs while also worrying about them.",
    thinkers: ["Dario Amodei", "Sam Altman", "Demis Hassabis", "Ilya Sutskever (early OpenAI era)"],
    communities: ["Anthropic", "OpenAI", "Google DeepMind", "Alignment Forum", "80,000 Hours"],
  },
  FUGI: {
    label: "The Accelerationist",
    tagline: "Fast, unprecedented, optimistic—and it's happening regardless",
    description:
      "You share the Builder's conviction that something genuinely new and transformative is arriving fast—but you think the idea of \"steering\" it is a comforting fiction. The competitive dynamics between nations, companies, and researchers make coordination effectively impossible. And that's fine, because you think the default outcome is good anyway. Let it rip. This is the e/acc (effective accelerationism) position. It's Marc Andreessen's \"Techno-Optimist Manifesto,\" Beff Jezos' Twitter persona, and the libertarian wing of Silicon Valley that sees regulation as the real existential risk. You probably think the Pause AI crowd is either naive about geopolitics or secretly just wants to lock in incumbents' advantages.",
    thinkers: ["Guillaume Verdon (Beff Jezos)", "Marc Andreessen", "Balaji Srinivasan"],
    communities: ["e/acc", "Techno-libertarians", "a16z", "r/singularity (optimist wing)"],
  },
  FUBO: {
    label: "The Safety Researcher",
    tagline: "Fast, unprecedented, worried—but we can fix this",
    description:
      "You're scared and you're working. You believe transformative AI is arriving soon, that it's qualitatively different from any technology humanity has built, and that the default trajectory is genuinely dangerous—but you believe human choices, right now, can change the outcome. This is the mainstream AI safety position. It's Stuart Russell's \"Human Compatible,\" Yoshua Bengio's open letters, Paul Christiano's alignment research at ARC, and Jan Leike's (brief, fraught) tenure leading superalignment at OpenAI. You probably think the AI labs are moving too fast but that engaging with them beats shouting from the outside. You might support compute governance, interpretability research, or Pause AI's advocacy—and you probably agonize about which interventions actually matter.",
    thinkers: ["Stuart Russell", "Yoshua Bengio", "Paul Christiano", "Jan Leike", "Connor Leahy"],
    communities: ["MIRI (moderate wing)", "ARC Evals", "CAIS", "Pause AI", "r/ControlProblem", "AI safety Twitter"],
  },
  FUBI: {
    label: "The Doomer",
    tagline: "Fast, unprecedented, worried—and we're probably cooked",
    description:
      "You've done the math—or at least the vibes-based equivalent—and the numbers don't add up. Transformative AI is coming fast, it's nothing like anything we've dealt with, the default outcome is catastrophic, and the coordination required to change course is beyond what humanity can realistically achieve. You'd love to be wrong. This is Eliezer Yudkowsky's position, especially post-2022. It's Roman Yampolskiy's \"we literally cannot solve this\" thesis. It's the energy of late-stage MIRI and the \"AI doom\" corner of Twitter/X. You probably find the safety researchers (FUBO) admirable but overly optimistic about tractability. You might have gone through a phase of trying to convince people and are now somewhere between gallows humor and genuine grief.",
    thinkers: ["Eliezer Yudkowsky", "Roman Yampolskiy", "Nate Soares"],
    communities: ["Late-stage MIRI", "AI doom Twitter/X", "r/ControlProblem (pessimist wing)", "LessWrong doomers"],
  },
  FAGO: {
    label: "The Pragmatic Optimist",
    tagline: "Fast, familiar, optimistic, and engaged",
    description:
      "You're firmly in the \"AI as normal technology\" camp—but with urgency. AI is advancing fast and will be enormously positive, but you don't buy the \"this is totally unlike anything before\" framing. Electricity was transformative. The internet was transformative. AI is transformative. That doesn't make it alien. You're aligned with what Arvind Narayanan and Sayash Kapoor call treating AI as a normal technology: evaluate it by what it actually does, not by sci-fi speculation about what it might become. Apply existing frameworks—antitrust, safety engineering, consumer protection—and update them as needed. This is the default worldview of most senior tech executives, mainstream tech journalism (Wired, Ars Technica, The Verge), and a lot of the venture capital world. It's Bill Gates' \"The Age of AI has begun\" letter. You probably find the x-risk crowd overwrought and wish the discourse focused on practical deployment, not science fiction.",
    thinkers: ["Bill Gates", "Satya Nadella", "Reid Hoffman", "Arvind Narayanan", "Ezra Klein (on optimistic days)"],
    communities: ["Tech industry mainstream", "AI Snake Oil readers", "Wired/Ars Technica readership", "Most VC firms", "Davos/WEF AI panels"],
  },
  FABI: {
    label: "The Fatalist Realist",
    tagline: "Fast, familiar, worried—and powerless",
    description:
      "You treat AI as a normal technology—no need for sci-fi framing—but that doesn't make you optimistic. You see AI moving fast and creating real, familiar problems: job displacement, surveillance, concentration of power. And you don't think we'll solve them. These are the same dynamics that play out with every major technology under capitalism: benefits accrue to the top, costs get socialized, reform efforts get captured or defanged. You agree with the \"AI Snake Oil\" crowd that we should evaluate AI concretely—but where they see a path to accountability, you see a system that reliably blocks it. This combination is rarer in organized AI discourse, but it's actually common among people in industries being disrupted: journalists watching their newsrooms hollow out, artists watching their styles scraped, tech workers who've seen ethics teams gutted. You're not dooming about AGI—you're dooming about political economy.",
    thinkers: ["Jaron Lanier (on pessimistic days)"],
    communities: ["Disillusioned tech workers", "Creative industry under threat", "r/antiwork meets AI"],
  },
  FABO: {
    label: "The Policy Advocate",
    tagline: "Fast, familiar, worried—let's regulate",
    description:
      "You're the action-oriented wing of the \"AI as normal technology\" position. AI is advancing fast and poses serious risks—but they're recognizable risks: labor displacement, algorithmic bias, corporate monopoly, surveillance, misinformation. These are policy problems with policy solutions. We have antitrust law, civil rights frameworks, labor protections—we just need the political will to apply and update them for AI. You probably resonate with Arvind Narayanan's insistence that we evaluate AI systems concretely and hold them to the same standards as other products. This is the EU's AI Act energy. It's Lina Khan's FTC going after deceptive AI claims, the AFL-CIO's AI principles, Daron Acemoglu's labor economics research showing automation doesn't have to mean immiseration. You probably find both the \"AI will save us\" and \"AI will kill us\" camps frustrating—the real fight is about power, accountability, and who benefits.",
    thinkers: ["Lina Khan", "Margrethe Vestager", "Anu Bradford", "Daron Acemoglu", "Arvind Narayanan"],
    communities: ["EU AI regulatory sphere", "AI Now Institute", "AI Snake Oil community", "AFL-CIO tech policy", "FAccT-adjacent"],
  },
  FAGI: {
    label: "The Comfortable Observer",
    tagline: "Fast, familiar, optimistic—and it'll sort itself out",
    description:
      "You see AI as a normal technology—and you're relaxed about it. It's moving fast, it'll be good, it's not fundamentally different from the internet or mobile or cloud, and the market will sort out allocation better than any committee. This is a surprisingly common position, even if few people write essays about it—because the whole point is that essays aren't needed. It's the implicit worldview of the business press, corporate AI adopters who see this as \"the next platform shift,\" and the large majority of people in tech who aren't spending their evenings reading alignment theory or policy papers. Where the \"AI Snake Oil\" folks say \"treat it as normal technology and hold it accountable,\" you say \"treat it as normal technology and let the market work.\" Same premise, very different conclusion. You probably think the AI safety discourse is somewhere between premature and self-important.",
    thinkers: [],
    communities: ["Business press mainstream", "Corporate AI adopters", "Laissez-faire tech culture", "Most enterprise SaaS"],
  },
  SUGO: {
    label: "The Patient Architect",
    tagline: "Slow, unprecedented, optimistic, and building carefully",
    description:
      "You think the timeline hawks are wrong—truly transformative AI is further out than the hype cycle suggests—but you agree it will eventually be genuinely unprecedented and potentially wonderful. The good news is that the longer timeline gives us room to build carefully: the right institutions, the right technical foundations, the right governance frameworks. This is a position you'll find among some academic AI researchers who are skeptical of scaling-maximalism but deeply serious about the long-term implications. It's adjacent to the longtermist wing of effective altruism (before the FTX implosion tainted the brand). You probably think the current AI capabilities are impressive but overhyped, and that the real breakthroughs will require fundamentally new approaches.",
    thinkers: ["Francois Chollet", "Gary Marcus (on optimistic days)"],
    communities: ["Academic AI research (non-scaling camp)", "Long-horizon safety research", "Parts of EA/longtermism"],
  },
  SUGI: {
    label: "The Relaxed Visionary",
    tagline: "Slow, unprecedented, optimistic—and it'll unfold naturally",
    description:
      "You believe genuinely transformative AI is coming eventually—and it will be something truly new—but the timeline is long enough that there's no urgency to steer it. Humanity will figure it out as it goes, like it always has (eventually). This is a rare combination in organized AI discourse. You won't find many think tanks or Twitter factions flying this flag explicitly. But it maps to a certain kind of technologist or scientist who is deeply fascinated by AI's long-term potential, not particularly worried, and suspicious of both accelerationist urgency and safety panic. You might be a researcher who thinks current systems are sophisticated pattern matchers and that real AI is decades away—but when it arrives, it'll be magnificent.",
    thinkers: [],
    communities: ["This combination is rarer in public discourse—you may be charting your own course"],
  },
  SUBO: {
    label: "The Long-term Safety Advocate",
    tagline: "Slow, unprecedented, worried—but we have time to prepare",
    description:
      "You're in the unusual position of being genuinely worried about AI's long-term trajectory while also thinking we have more time than the doomers claim. Transformative AI is coming, it will be genuinely unprecedented, and the default outcome is concerning—but the silver lining is that we have decades, not years, to get our act together. The question is whether we'll actually use that time wisely. This was closer to MIRI's original position in the 2000s and early 2010s, before timelines compressed. It's the worldview of some longtermist researchers who focus on institutional design rather than technical alignment. You probably think the current \"AI safety\" discourse is too focused on near-term systems and not enough on the harder problems that will matter when truly transformative AI arrives.",
    thinkers: ["Nick Bostrom (circa 2014)", "Toby Ord"],
    communities: ["Early MIRI/FHI era", "Oxford-style longtermism", "GovAI"],
  },
  SUBI: {
    label: "The Distant Doomer",
    tagline: "Slow, unprecedented, worried—and we won't prepare in time",
    description:
      "You see a slow-moving catastrophe. Transformative AI is further away than the hype suggests, but when it arrives it will be genuinely unprecedented—and humanity will have squandered the intervening decades on discourse instead of preparation. We'll see the iceberg coming for years and still hit it, because that's what we do. This is a rare and lonely position. It combines a contrarian timeline view with deep structural pessimism about humanity's capacity for coordination. You might draw parallels to climate change: we've known about it for decades, the science is clear, and we're still nowhere close to adequate action. Why would AI be different? You probably don't have a natural home in any existing AI community.",
    thinkers: [],
    communities: ["No natural home—this is a position arrived at through pessimism about human coordination, not AI-specific discourse"],
  },
  SAGO: {
    label: "The Incrementalist",
    tagline: "Slow, familiar, optimistic, and calm",
    description:
      "You're the purest expression of the \"AI as normal technology\" worldview. AGI is far away. AI is a powerful but ultimately familiar kind of technology. Outcomes will be broadly positive. And we can steer it with normal institutional tools—regulations, standards bodies, market competition, consumer protection. Just build good products, write sensible regulations, and stop treating every chatbot improvement like the birth of a new species. This is Yann LeCun's position (\"current LLMs are not on the path to AGI\"), Andrew Ng's pragmatic optimism, and the core thesis of Narayanan and Kapoor's \"AI Snake Oil\"—that most AI discourse wildly overpromises and we should evaluate systems by what they actually do. It's the default view in most economics departments, among many working ML engineers, and in the \"AI skeptic\" corners of Twitter/X. You probably find both the utopians and the doomers exhausting.",
    thinkers: ["Yann LeCun", "Andrew Ng", "Arvind Narayanan", "Sayash Kapoor", "Steven Pinker", "Gary Marcus"],
    communities: ["AI Snake Oil / normal technology movement", "ML engineering mainstream", "AI hype skeptics", "Economics departments", "r/MachineLearning (skeptic threads)"],
  },
  SAGI: {
    label: "The Calm Skeptic",
    tagline: "Slow, familiar, optimistic—relax, it'll be fine",
    description:
      "You think the entire AI discourse is massively overheated. AGI is far away. AI is a normal technology, not a new species. Outcomes will be fine. And the market will handle allocation better than any committee of worried intellectuals. The safety crowd is catastrophizing, the policy crowd is empire-building, and the accelerationists are LARPing. Just chill. You share the \"AI as normal technology\" framing but go further than the Incrementalists—you don't think it even needs much active steering. It'll be fine the way the internet was fine, the way smartphones were fine. This isn't a position many people write manifestos about, because the whole point is that manifestos aren't needed. But it's arguably the most common position among the general public and much of the non-AI tech industry. If you're taking this quiz and got this result, you're probably here out of curiosity rather than anxiety.",
    thinkers: [],
    communities: ["The general public", "Most of the non-AI tech industry", "Normal technology default position"],
  },
  SABO: {
    label: "The Skeptical Critic",
    tagline: "Slow, familiar, worried—but about present harms",
    description:
      "You insist on treating AI as a normal technology—and that means holding it to normal standards of accountability, right now. The AGI discourse is a distraction—possibly a deliberate one—from the real harms AI is causing today: bias in hiring algorithms, facial recognition deployed against marginalized communities, platforms using recommendation engines to maximize engagement at the cost of democracy, gig economy surveillance, and the massive concentration of power in a handful of companies. These aren't speculative risks; they're happening. The \"existential risk\" framing conveniently redirects attention (and funding) away from present accountability. You share the \"AI Snake Oil\" premise that we should evaluate AI concretely—and when you do, what you see is a technology being deployed irresponsibly by powerful companies with inadequate oversight. This is the position of Timnit Gebru, Emily Bender (the \"Stochastic Parrots\" paper), Meredith Whittaker at Signal, and the FAccT research community. You probably see the AI safety movement and the AI labs as two sides of the same Silicon Valley coin.",
    thinkers: ["Timnit Gebru", "Emily Bender", "Meredith Whittaker", "Safiya Noble", "Ruha Benjamin"],
    communities: ["DAIR Institute", "FAccT", "AI Now Institute", "AI Ethics academia", "Tech accountability movement"],
  },
  SABI: {
    label: "The Quiet Pessimist",
    tagline: "Slow, familiar, worried—and change is hard",
    description:
      "You share the Skeptical Critic's focus on present harms and rejection of AGI hype—but you're more pessimistic about our ability to actually fix things. The harms of AI are real: surveillance, labor exploitation, algorithmic discrimination, corporate consolidation. But the political and economic forces driving these outcomes are deeply entrenched. Regulation gets captured. Movements get co-opted. Reforms get watered down. You might still do the work, but without illusions about systemic transformation. This maps to the more structurally pessimistic wing of tech criticism—influenced by scholars who see technology as embedded in (and reinforcing) existing power structures. Think Evgeny Morozov's critique of tech solutionism, Shoshana Zuboff's surveillance capitalism thesis, or the post-Marxist analysis of platform economies. You probably find both Silicon Valley optimism and AI safety paternalism equally tiresome.",
    thinkers: ["Evgeny Morozov", "Shoshana Zuboff", "Cory Doctorow"],
    communities: ["Tech criticism/pessimism", "Platform criticism", "Surveillance studies", "Logic Magazine readers"],
  },
};

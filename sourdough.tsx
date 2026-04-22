import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock3, Scale, Droplets, Wheat, ChefHat, TimerReset, Info, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

function addHours(date: Date, hours: number) {
  return new Date(date.getTime() + hours * 60 * 60 * 1000);
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
}

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function round(n: number) {
  return Math.round(n);
}

type FlourPreset = "wheat" | "wheat-rye" | "country";

const flourLabels: Record<FlourPreset, string> = {
  wheat: "100% Wheat",
  "wheat-rye": "60% Wheat / 40% Rye",
  country: "85% Bread Flour / 15% Whole Wheat",
};

export default function EasySourdoughRebuild() {
  const now = new Date();
  const initialBake = new Date(now);
  initialBake.setDate(initialBake.getDate() + 2);
  initialBake.setHours(10, 0, 0, 0);

  const [bakeDate, setBakeDate] = useState(initialBake.toISOString().slice(0, 10));
  const [bakeTime, setBakeTime] = useState("10:00");
  const [totalFlour, setTotalFlour] = useState(1000);
  const [hydration, setHydration] = useState([70]);
  const [starterPercent, setStarterPercent] = useState([26]);
  const [saltPercent, setSaltPercent] = useState([2]);
  const [loafCount, setLoafCount] = useState("2");
  const [coldFermentHours, setColdFermentHours] = useState([20]);
  const [autolyseHours, setAutolyseHours] = useState([1]);
  const [bulkHours, setBulkHours] = useState([5]);
  const [starterLeadHours, setStarterLeadHours] = useState([12]);
  const [flourPreset, setFlourPreset] = useState<FlourPreset>("wheat-rye");

  const bakeDateTime = useMemo(() => {
    const dt = new Date(`${bakeDate}T${bakeTime}:00`);
    return Number.isNaN(dt.getTime()) ? new Date() : dt;
  }, [bakeDate, bakeTime]);

  const timeline = useMemo(() => {
    const bake = bakeDateTime;
    const coldStart = addHours(bake, -coldFermentHours[0]);
    const shapeTime = addHours(coldStart, -0.5);
    const bulkStart = addHours(shapeTime, -bulkHours[0]);
    const autolyseStart = addHours(bulkStart, -autolyseHours[0]);
    const starterFeed = addHours(autolyseStart, -starterLeadHours[0]);

    return [
      {
        key: "starter",
        icon: "🌱",
        title: "Feed Starter",
        description: "Feed your starter so it peaks by mixing time.",
        date: starterFeed,
      },
      {
        key: "autolyse",
        icon: "💧",
        title: "Autolyse",
        description: "Mix flour and water, then rest before adding starter and salt.",
        date: autolyseStart,
      },
      {
        key: "bulk",
        icon: "☀️",
        title: "Bulk Fermentation",
        description: "Add starter and salt, then ferment at room temperature.",
        date: bulkStart,
      },
      {
        key: "cold",
        icon: "❄️",
        title: `Cold Proof · ${coldFermentHours[0]}h`,
        description: "Shape the dough, refrigerate, and bake straight from cold.",
        date: coldStart,
      },
      {
        key: "bake",
        icon: "🔥",
        title: "Bake",
        description: "Score, steam, and bake until deeply browned.",
        date: bake,
      },
    ];
  }, [bakeDateTime, coldFermentHours, bulkHours, autolyseHours, starterLeadHours]);

  const recipe = useMemo(() => {
    const flour = totalFlour;
    const water = flour * (hydration[0] / 100);
    const starter = flour * (starterPercent[0] / 100);
    const salt = flour * (saltPercent[0] / 100);
    const totalDough = flour + water + starter + salt;
    const perLoaf = totalDough / Number(loafCount || 1);

    let flourBreakdown = [
      { name: "Wheat flour", grams: flour },
    ];

    if (flourPreset === "wheat-rye") {
      flourBreakdown = [
        { name: "Wheat flour", grams: flour * 0.6 },
        { name: "Rye flour", grams: flour * 0.4 },
      ];
    }

    if (flourPreset === "country") {
      flourBreakdown = [
        { name: "Bread flour", grams: flour * 0.85 },
        { name: "Whole wheat flour", grams: flour * 0.15 },
      ];
    }

    const starterFlour = starter / 2;
    const starterWater = starter / 2;
    const finalMixFlour = flour - starterFlour;
    const finalMixWater = water - starterWater;

    return {
      flour,
      water,
      starter,
      salt,
      totalDough,
      perLoaf,
      flourBreakdown: flourBreakdown.map((f) => ({ ...f, grams: round(f.grams) })),
      levain: [
        { name: "Mature starter", grams: round(starter * 0.2) },
        { name: "Flour", grams: round(starterFlour * 0.8) },
        { name: "Water", grams: round(starterWater * 0.8) },
      ],
      finalMix: [
        { name: "Flour", grams: round(finalMixFlour) },
        { name: "Water", grams: round(finalMixWater) },
        { name: "Salt", grams: round(salt) },
        { name: "Ripe starter", grams: round(starter) },
      ],
    };
  }, [totalFlour, hydration, starterPercent, saltPercent, loafCount, flourPreset]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-6"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Badge className="rounded-full">English rebuild</Badge>
                <Badge variant="secondary" className="rounded-full">Mobile-friendly</Badge>
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Easy Sourdough Planner</h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                A cleaner, more usable version of the live site: plan your bake, adjust hydration and flour mix,
                and get a simple ingredient breakdown for one or more loaves.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:flex">
              <Button variant="outline" className="rounded-2xl" onClick={() => {
                setTotalFlour(1000);
                setHydration([70]);
                setStarterPercent([26]);
                setSaltPercent([2]);
                setLoafCount("2");
                setColdFermentHours([20]);
                setAutolyseHours([1]);
                setBulkHours([5]);
                setStarterLeadHours([12]);
                setFlourPreset("wheat-rye");
              }}>
                <TimerReset className="mr-2 h-4 w-4" /> Reset
              </Button>
              <Button className="rounded-2xl" onClick={() => window.print()}>
                <ChefHat className="mr-2 h-4 w-4" /> Print recipe
              </Button>
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="recipe" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 rounded-2xl bg-white p-1 shadow-sm md:w-[320px]">
            <TabsTrigger value="recipe" className="rounded-xl">Recipe</TabsTrigger>
            <TabsTrigger value="schedule" className="rounded-xl">Schedule</TabsTrigger>
          </TabsList>

          <TabsContent value="recipe" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Card className="rounded-3xl border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl"><Scale className="h-5 w-5" /> Dough settings</CardTitle>
                  <CardDescription>Make the numbers bigger, clearer, and easier to change on a phone.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="totalFlour">Total flour (g)</Label>
                      <Input id="totalFlour" type="number" min={100} step={25} value={totalFlour} onChange={(e) => setTotalFlour(Number(e.target.value || 0))} className="h-12 rounded-2xl text-base" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="loafCount">Loaf count</Label>
                      <Select value={loafCount} onValueChange={setLoafCount}>
                        <SelectTrigger id="loafCount" className="h-12 rounded-2xl text-base">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 loaf</SelectItem>
                          <SelectItem value="2">2 loaves</SelectItem>
                          <SelectItem value="3">3 loaves</SelectItem>
                          <SelectItem value="4">4 loaves</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Flour mix</Label>
                    <Select value={flourPreset} onValueChange={(v) => setFlourPreset(v as FlourPreset)}>
                      <SelectTrigger className="h-12 rounded-2xl text-base">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wheat">{flourLabels.wheat}</SelectItem>
                        <SelectItem value="wheat-rye">{flourLabels["wheat-rye"]}</SelectItem>
                        <SelectItem value="country">{flourLabels.country}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {[
                    {
                      label: "Hydration",
                      value: hydration,
                      setValue: setHydration,
                      min: 50,
                      max: 100,
                      step: 1,
                      icon: <Droplets className="h-4 w-4" />,
                      suffix: "%",
                    },
                    {
                      label: "Starter percentage",
                      value: starterPercent,
                      setValue: setStarterPercent,
                      min: 10,
                      max: 40,
                      step: 1,
                      icon: <Wheat className="h-4 w-4" />,
                      suffix: "%",
                    },
                    {
                      label: "Salt percentage",
                      value: saltPercent,
                      setValue: setSaltPercent,
                      min: 1.5,
                      max: 3,
                      step: 0.1,
                      icon: <Scale className="h-4 w-4" />,
                      suffix: "%",
                    },
                  ].map((item) => (
                    <div key={item.label} className="space-y-3 rounded-2xl bg-slate-50 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                          {item.icon}
                          {item.label}
                        </div>
                        <div className="rounded-full bg-white px-3 py-1 text-sm font-semibold shadow-sm">
                          {item.value[0]}{item.suffix}
                        </div>
                      </div>
                      <Slider value={item.value} onValueChange={item.setValue} min={item.min} max={item.max} step={item.step} />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="rounded-3xl border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">At a glance</CardTitle>
                    <CardDescription>The key numbers stay visible without digging through tiny controls.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        ["Total dough", `${round(recipe.totalDough)} g`],
                        ["Per loaf", `${round(recipe.perLoaf)} g`],
                        ["Water", `${round(recipe.water)} g`],
                        ["Starter", `${round(recipe.starter)} g`],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-2xl bg-slate-50 p-4">
                          <div className="text-sm text-slate-500">{label}</div>
                          <div className="mt-1 text-2xl font-bold">{value}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">Ingredients</CardTitle>
                    <CardDescription>Based on {flourLabels[flourPreset].toLowerCase()}.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <div className="mb-3 text-sm font-semibold text-slate-700">Flour breakdown</div>
                      <div className="space-y-2">
                        {recipe.flourBreakdown.map((item) => (
                          <div key={item.name} className="flex items-center justify-between text-sm">
                            <span>{item.name}</span>
                            <span className="font-semibold">{item.grams} g</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Accordion type="multiple" className="w-full">
                      <AccordionItem value="levain">
                        <AccordionTrigger>Preferment / starter build</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pt-1">
                            {recipe.levain.map((item) => (
                              <div key={item.name} className="flex items-center justify-between text-sm">
                                <span>{item.name}</span>
                                <span className="font-semibold">{item.grams} g</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="finalMix">
                        <AccordionTrigger>Final dough mix</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pt-1">
                            {recipe.finalMix.map((item) => (
                              <div key={item.name} className="flex items-center justify-between text-sm">
                                <span>{item.name}</span>
                                <span className="font-semibold">{item.grams} g</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <Card className="rounded-3xl border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl"><CalendarDays className="h-5 w-5" /> Bake plan</CardTitle>
                  <CardDescription>Pick your bake time and the schedule updates automatically.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="bakeDate">Bake date</Label>
                      <Input id="bakeDate" type="date" value={bakeDate} onChange={(e) => setBakeDate(e.target.value)} className="h-12 rounded-2xl text-base" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bakeTime">Bake time</Label>
                      <Input id="bakeTime" type="time" value={bakeTime} onChange={(e) => setBakeTime(e.target.value)} className="h-12 rounded-2xl text-base" />
                    </div>
                  </div>

                  {[
                    ["Starter lead time", starterLeadHours, setStarterLeadHours, 6, 18, 1, "h"],
                    ["Autolyse", autolyseHours, setAutolyseHours, 0, 4, 0.5, "h"],
                    ["Bulk fermentation", bulkHours, setBulkHours, 3, 8, 0.5, "h"],
                    ["Cold proof", coldFermentHours, setColdFermentHours, 8, 36, 1, "h"],
                  ].map(([label, value, setValue, min, max, step, suffix]) => (
                    <div key={String(label)} className="space-y-3 rounded-2xl bg-slate-50 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                          <Clock3 className="h-4 w-4" /> {label}
                        </div>
                        <div className="rounded-full bg-white px-3 py-1 text-sm font-semibold shadow-sm">
                          {(value as number[])[0]}{suffix as string}
                        </div>
                      </div>
                      <Slider value={value as number[]} onValueChange={setValue as (v:number[])=>void} min={min as number} max={max as number} step={step as number} />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Timeline</CardTitle>
                  <CardDescription>Readable on desktop and phone, with larger targets and clearer labels.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {timeline.map((step, index) => (
                      <motion.div
                        key={step.key}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04 }}
                        className="rounded-2xl border border-slate-200 bg-white p-4"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-xl">
                              {step.icon}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold">{step.title}</h3>
                                {step.key === "bake" ? <CheckCircle2 className="h-4 w-4 text-emerald-600" /> : null}
                              </div>
                              <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                            </div>
                          </div>
                          <div className="rounded-2xl bg-slate-50 px-3 py-2 text-sm sm:text-right">
                            <div className="font-semibold">{formatTime(step.date)}</div>
                            <div className="text-slate-500">{formatDate(step.date)}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <Card className="mt-6 rounded-3xl border-0 shadow-sm">
          <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-start">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
            <div className="text-sm text-slate-600">
              This rebuild is based on the live public site structure I could inspect: a sourdough recipe tab and a baking schedule tab with flour mix, hydration, starter percentage, and a timed bake plan. The calculator logic here is a practical reconstruction designed to be easier to use and adapt.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	ArrowRight,
	CheckCircle,
	Mail,
	MapPin,
	Phone,
	Search,
	Target,
	TrendingUp,
	Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Area, AreaChart, Line, LineChart, XAxis, YAxis } from "recharts";

const trafficData = [
	{ month: "Jan", visitors: 12000, organic: 8000 },
	{ month: "Feb", visitors: 15000, organic: 11000 },
	{ month: "Mar", visitors: 18000, organic: 14000 },
	{ month: "Apr", visitors: 22000, organic: 17000 },
	{ month: "May", visitors: 28000, organic: 22000 },
	{ month: "Jun", visitors: 35000, organic: 28000 },
];

const visibilityData = [
	{ month: "Jan", client: 28, competitor1: 42, competitor2: 35 },
	{ month: "Feb", client: 35, competitor1: 40, competitor2: 32 },
	{ month: "Mar", client: 42, competitor1: 38, competitor2: 30 },
	{ month: "Apr", client: 48, competitor1: 36, competitor2: 28 },
	{ month: "May", client: 53, competitor1: 35, competitor2: 27 },
	{ month: "Jun", client: 60, competitor1: 33, competitor2: 25 },
];

const conversionData = [
	{ month: "Jan", rate: 2.1 },
	{ month: "Feb", rate: 2.8 },
	{ month: "Mar", rate: 3.2 },
	{ month: "Apr", rate: 3.9 },
	{ month: "May", rate: 4.5 },
	{ month: "Jun", rate: 5.2 },
];

const chartConfig = {
	visitors: {
		label: "Total Visitors",
		color: "hsl(var(--chart-1))",
	},
	organic: {
		label: "Organic Traffic",
		color: "hsl(var(--chart-2))",
	},
	before: {
		label: "Before",
		color: "hsl(var(--chart-3))",
	},
	after: {
		label: "After",
		color: "hsl(var(--chart-1))",
	},
	rate: {
		label: "Conversion Rate",
		color: "hsl(var(--chart-2))",
	},
	client: {
		label: "Din virksomhed",
		color: "hsl(var(--chart-1))",
	},
	competitor1: {
		label: "Konkurrent 1",
		color: "hsl(var(--chart-3))",
	},
	competitor2: {
		label: "Konkurrent 2",
		color: "hsl(var(--chart-4))",
	},
} satisfies ChartConfig;

export default function Component() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Header */}
			<header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
				<Link href="/" className="flex items-center justify-center">
					<Search className="h-6 w-6 text-blue-600" />
					<span className="ml-2 text-xl font-bold text-gray-900">
						onlineFundamentet
					</span>
				</Link>
				<nav className="ml-auto flex gap-4 sm:gap-6">
					<Link
						href="#services"
						className="text-sm font-medium hover:text-blue-600 transition-colors"
					>
						Services
					</Link>
					<Link
						href="#results"
						className="text-sm font-medium hover:text-blue-600 transition-colors"
					>
						Results
					</Link>
					<Link
						href="#about"
						className="text-sm font-medium hover:text-blue-600 transition-colors"
					>
						About
					</Link>
					<Link
						href="#contact"
						className="text-sm font-medium hover:text-blue-600 transition-colors"
					>
						Contact
					</Link>
				</nav>
			</header>

			<main className="flex-1">
				{/* Hero Section */}
				<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<Badge variant="secondary" className="w-fit">
										#1 SEO Consultancy
									</Badge>
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
										Dominér søgeresultater med ekspert SEO
									</h1>
									<p className="max-w-[600px] text-gray-600 md:text-xl">
										onlineFundamentet specialiserer sig i avancerede
										SEO-strategier, der driver organisk trafik, forbedrer
										placeringer og øger din online synlighed. Få målbare
										resultater på 90 dage.
									</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<Button size="lg" className="bg-blue-600 hover:bg-blue-700">
										Få gratis SEO-audit
										<ArrowRight className="ml-2 h-4 w-4" />
									</Button>
									<Button variant="outline" size="lg">
										Se casestudier
									</Button>
								</div>
								<div className="flex items-center gap-4 text-sm text-gray-600">
									<div className="flex items-center gap-1">
										<CheckCircle className="h-4 w-4 text-green-600" />
										<span>500+ kunder</span>
									</div>
									<div className="flex items-center gap-1">
										<CheckCircle className="h-4 w-4 text-green-600" />
										<span>Gennemsnitlig 300% trafikstigning</span>
									</div>
								</div>
							</div>
							<div className="flex items-center justify-center">
								<Image
									src="/placeholder.svg?height=400&width=600"
									width="600"
									height="400"
									alt="SEO Dashboard"
									className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Services Section */}
				<section id="services" className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<Badge variant="outline">Vores tjenester</Badge>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Komplette SEO-løsninger
								</h2>
								<p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Fra tekniske audits til indholdsoptimering leverer vi
									omfattende SEO-tjenester, der leverer reelle, målbare
									resultater for din virksomhed.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
							<Card className="relative overflow-hidden">
								<CardHeader>
									<Search className="h-8 w-8 text-blue-600" />
									<CardTitle>Teknisk SEO-audit</CardTitle>
									<CardDescription>
										Omfattende analyse af din hjemmesides tekniske fundament,
										der identificerer og løser problemer, der påvirker
										søgeydelsen.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ul className="space-y-2 text-sm">
										<li className="flex items-center gap-2">
											<CheckCircle className="h-4 w-4 text-green-600" />
											Site Speed Optimering
										</li>
										<li className="flex items-center gap-2">
											<CheckCircle className="h-4 w-4 text-green-600" />
											Mobil Responsivitet
										</li>
										<li className="flex items-center gap-2">
											<CheckCircle className="h-4 w-4 text-green-600" />
											Schema Markup
										</li>
									</ul>
								</CardContent>
							</Card>
							<Card className="relative overflow-hidden">
								<CardHeader>
									<TrendingUp className="h-8 w-8 text-blue-600" />
									<CardTitle>Keyword Strategi</CardTitle>
									<CardDescription>
										Datadrevet søgeordsanalyse og indholdsoptimering for at
										målrette søgeord med høj værdi i din branche.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ul className="space-y-2 text-sm">
										<li className="flex items-center gap-2">
											<CheckCircle className="h-4 w-4 text-green-600" />
											Konkurrentanalyse
										</li>
										<li className="flex items-center gap-2">
											<CheckCircle className="h-4 w-4 text-green-600" />
											Indholdsgap Analyse
										</li>
										<li className="flex items-center gap-2">
											<CheckCircle className="h-4 w-4 text-green-600" />
											Long-tail Optimering
										</li>
									</ul>
								</CardContent>
							</Card>
							<Card className="relative overflow-hidden">
								<CardHeader>
									<Target className="h-8 w-8 text-blue-600" />
									<CardTitle>Link Building</CardTitle>
									<CardDescription>
										Strategiske link acquisition kampagner, der opbygger
										domæneautoritet og forbedrer dine søgemaskineplaceringer.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ul className="space-y-2 text-sm">
										<li className="flex items-center gap-2">
											<CheckCircle className="h-4 w-4 text-green-600" />
											Højkvalitets Backlinks
										</li>
										<li className="flex items-center gap-2">
											<CheckCircle className="h-4 w-4 text-green-600" />
											Gæsteindlæg Outreach
										</li>
										<li className="flex items-center gap-2">
											<CheckCircle className="h-4 w-4 text-green-600" />
											Digital PR Kampagner
										</li>
									</ul>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* Results Section */}
				<section
					id="results"
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
				>
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<Badge variant="outline">Dokumenterede resultater</Badge>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Vores succeshistorier
								</h2>
								<p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									Reelle data fra reelle kunder. Se, hvordan vores
									SEO-strategier har transformeret virksomheder på tværs af
									forskellige brancher.
								</p>
							</div>
						</div>

						<div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
							{/* Traffic Growth Chart */}
							<Card>
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<TrendingUp className="h-5 w-5 text-blue-600" />
										Organisk trafikvækst
									</CardTitle>
									<CardDescription>
										Gennemsnitlig stigning i klienttrafik over 6 måneder
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ChartContainer config={chartConfig}>
										<AreaChart
											accessibilityLayer
											data={trafficData}
											margin={{
												left: 12,
												right: 12,
											}}
										>
											<XAxis
												dataKey="month"
												tickLine={false}
												axisLine={false}
												tickMargin={8}
											/>
											<YAxis hide />
											<ChartTooltip
												cursor={false}
												content={<ChartTooltipContent />}
											/>
											<defs>
												<linearGradient
													id="fillVisitors"
													x1="0"
													y1="0"
													x2="0"
													y2="1"
												>
													<stop
														offset="5%"
														stopColor="var(--color-visitors)"
														stopOpacity={0.8}
													/>
													<stop
														offset="95%"
														stopColor="var(--color-visitors)"
														stopOpacity={0.1}
													/>
												</linearGradient>
												<linearGradient
													id="fillOrganic"
													x1="0"
													y1="0"
													x2="0"
													y2="1"
												>
													<stop
														offset="5%"
														stopColor="var(--color-organic)"
														stopOpacity={0.8}
													/>
													<stop
														offset="95%"
														stopColor="var(--color-organic)"
														stopOpacity={0.1}
													/>
												</linearGradient>
											</defs>
											<Area
												dataKey="organic"
												type="natural"
												fill="url(#fillOrganic)"
												fillOpacity={0.4}
												stroke="var(--color-organic)"
												stackId="a"
											/>
											<Area
												dataKey="visitors"
												type="natural"
												fill="url(#fillVisitors)"
												fillOpacity={0.4}
												stroke="var(--color-visitors)"
												stackId="a"
											/>
										</AreaChart>
									</ChartContainer>
								</CardContent>
							</Card>

							{/* Organic Search Visibility */}
							<Card>
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<TrendingUp className="h-5 w-5 text-blue-600" />
										Organisk søgesynlighed
									</CardTitle>
									<CardDescription>
										Sammenligning med konkurrenter over tid (højere er bedre)
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ChartContainer config={chartConfig}>
										<LineChart
											accessibilityLayer
											data={visibilityData}
											margin={{
												left: 12,
												right: 12,
											}}
										>
											<XAxis
												dataKey="month"
												tickLine={false}
												axisLine={false}
												tickMargin={8}
											/>
											<YAxis hide />
											<ChartTooltip
												cursor={false}
												content={<ChartTooltipContent />}
											/>
											<Line
												type="monotone"
												dataKey="client"
												stroke="var(--color-client)"
												strokeWidth={3}
												dot={{
													fill: "var(--color-client)",
													r: 4,
												}}
												activeDot={{
													r: 6,
												}}
											/>
											<Line
												type="monotone"
												dataKey="competitor1"
												stroke="var(--color-competitor1)"
												strokeWidth={2}
												strokeDasharray="5 5"
												dot={{
													fill: "var(--color-competitor1)",
													r: 3,
												}}
											/>
											<Line
												type="monotone"
												dataKey="competitor2"
												stroke="var(--color-competitor2)"
												strokeWidth={2}
												strokeDasharray="3 3"
												dot={{
													fill: "var(--color-competitor2)",
													r: 3,
												}}
											/>
										</LineChart>
									</ChartContainer>
								</CardContent>
							</Card>

							{/* Conversion Rate */}
							<Card>
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<Target className="h-5 w-5 text-blue-600" />
										Konverteringsfrekvensoptimering
									</CardTitle>
									<CardDescription>
										Månedlige forbedringer af konverteringsfrekvensen
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ChartContainer config={chartConfig}>
										<LineChart
											accessibilityLayer
											data={conversionData}
											margin={{
												left: 12,
												right: 12,
											}}
										>
											<XAxis
												dataKey="month"
												tickLine={false}
												axisLine={false}
												tickMargin={8}
											/>
											<YAxis hide />
											<ChartTooltip
												cursor={false}
												content={<ChartTooltipContent hideLabel />}
											/>
											<Line
												dataKey="rate"
												type="natural"
												stroke="var(--color-rate)"
												strokeWidth={2}
												dot={{
													fill: "var(--color-rate)",
												}}
												activeDot={{
													r: 6,
												}}
											/>
										</LineChart>
									</ChartContainer>
								</CardContent>
							</Card>

							{/* Key Metrics */}
							<Card>
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<Users className="h-5 w-5 text-blue-600" />
										Nøgletal
									</CardTitle>
									<CardDescription>
										Gennemsnitlige resultater på tværs af alle klienter
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="flex items-center justify-between">
										<span className="text-sm font-medium">
											Organisk trafikstigning
										</span>
										<span className="text-2xl font-bold text-green-600">
											+347%
										</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm font-medium">
											Gennemsnitlig rangeringsposition
										</span>
										<span className="text-2xl font-bold text-blue-600">
											#3.2
										</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm font-medium">
											Forbedring af konverteringsfrekvens
										</span>
										<span className="text-2xl font-bold text-purple-600">
											+148%
										</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm font-medium">
											Kunderetentionsrate
										</span>
										<span className="text-2xl font-bold text-orange-600">
											94%
										</span>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* About Section */}
				<section id="about" className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<Badge variant="outline">Om onlineFundamentet</Badge>
									<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
										SEO-eksperter du kan stole på
									</h2>
									<p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
										onlineFundamentet, der blev grundlagt i 2018, har hjulpet
										over 500 virksomheder med at nå deres online mål gennem
										strategisk SEO-optimering. Vores team af certificerede
										SEO-specialister kombinerer teknisk ekspertise med kreative
										strategier.
									</p>
								</div>
								<div className="grid gap-4 sm:grid-cols-2">
									<div className="space-y-2">
										<h3 className="text-lg font-semibold">Vores mission</h3>
										<p className="text-sm text-gray-600">
											At hjælpe virksomheder med at dominere deres lokale og
											globale markeder gennem datadrevne SEO-strategier, der
											leverer målbare resultater.
										</p>
									</div>
									<div className="space-y-2">
										<h3 className="text-lg font-semibold">Vores tilgang</h3>
										<p className="text-sm text-gray-600">
											Vi tror på gennemsigtighed, løbende optimering og
											opbygning af langsigtede partnerskaber med vores kunder
											baseret på tillid og resultater.
										</p>
									</div>
								</div>
							</div>
							<div className="flex items-center justify-center">
								<Image
									src="/placeholder.svg?height=400&width=600"
									width="600"
									height="400"
									alt="Team at work"
									className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section
					id="contact"
					className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
				>
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<Badge variant="outline">Kom i gang</Badge>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Klar til at booste dine placeringer?
								</h2>
								<p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
									Få en gratis SEO-audit og opdag, hvordan vi kan hjælpe din
									virksomhed med at dominere søgeresultaterne.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
							<Card>
								<CardHeader>
									<CardTitle>Send os en besked</CardTitle>
									<CardDescription>
										Udfyld formularen nedenfor, og vi vender tilbage til dig
										inden for 24 timer.
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="grid gap-4 sm:grid-cols-2">
										<div className="space-y-2">
											<label
												htmlFor="first-name"
												className="text-sm font-medium"
											>
												Fornavn
											</label>
											<Input
												id="first-name"
												placeholder="Indtast dit fornavn"
											/>
										</div>
										<div className="space-y-2">
											<label
												htmlFor="last-name"
												className="text-sm font-medium"
											>
												Efternavn
											</label>
											<Input
												id="last-name"
												placeholder="Indtast dit efternavn"
											/>
										</div>
									</div>
									<div className="space-y-2">
										<label htmlFor="email" className="text-sm font-medium">
											E-mail
										</label>
										<Input
											id="email"
											type="email"
											placeholder="Indtast din e-mail"
										/>
									</div>
									<div className="space-y-2">
										<label htmlFor="website" className="text-sm font-medium">
											Hjemmeside URL
										</label>
										<Input id="website" placeholder="https://yourwebsite.com" />
									</div>
									<div className="space-y-2">
										<label htmlFor="message" className="text-sm font-medium">
											Besked
										</label>
										<Textarea
											id="message"
											placeholder="Fortæl os om dine SEO-mål..."
											className="min-h-[100px]"
										/>
									</div>
									<Button className="w-full bg-blue-600 hover:bg-blue-700">
										Få gratis SEO-audit
									</Button>
								</CardContent>
							</Card>
							<div className="space-y-6">
								<Card>
									<CardHeader>
										<CardTitle>Kontakt information</CardTitle>
									</CardHeader>
									<CardContent className="space-y-4">
										<div className="flex items-center gap-3">
											<Mail className="h-5 w-5 text-blue-600" />
											<div>
												<p className="font-medium">E-mail</p>
												<p className="text-sm text-gray-600">
													hello@onlinefundamentet.com
												</p>
											</div>
										</div>
										<div className="flex items-center gap-3">
											<Phone className="h-5 w-5 text-blue-600" />
											<div>
												<p className="font-medium">Telefon</p>
												<p className="text-sm text-gray-600">
													+1 (555) 123-4567
												</p>
											</div>
										</div>
										<div className="flex items-center gap-3">
											<MapPin className="h-5 w-5 text-blue-600" />
											<div>
												<p className="font-medium">Adresse</p>
												<p className="text-sm text-gray-600">
													123 SEO Street, Digital City, DC 12345
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
								<Card>
									<CardHeader>
										<CardTitle>Hvorfor vælge os?</CardTitle>
									</CardHeader>
									<CardContent className="space-y-3">
										<div className="flex items-center gap-2">
											<CheckCircle className="h-4 w-4 text-green-600" />
											<span className="text-sm">
												Dokumenteret track record med 500+ kunder
											</span>
										</div>
										<div className="flex items-center gap-2">
											<CheckCircle className="h-4 w-4 text-green-600" />
											<span className="text-sm">
												Gennemsnitlig 347% trafikstigning
											</span>
										</div>
										<div className="flex items-center gap-2">
											<CheckCircle className="h-4 w-4 text-green-600" />
											<span className="text-sm">
												Kun white-hat SEO-teknikker
											</span>
										</div>
										<div className="flex items-center gap-2">
											<CheckCircle className="h-4 w-4 text-green-600" />
											<span className="text-sm">
												Månedlig rapportering og analyse
											</span>
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-gray-600">
					© 2024 onlineFundamentet. Alle rettigheder forbeholdes.
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<Link
						href="#"
						className="text-xs hover:underline underline-offset-4 text-gray-600"
					>
						Privatlivspolitik
					</Link>
					<Link
						href="#"
						className="text-xs hover:underline underline-offset-4 text-gray-600"
					>
						Servicevilkår
					</Link>
					<Link
						href="#"
						className="text-xs hover:underline underline-offset-4 text-gray-600"
					>
						Cookie-politik
					</Link>
				</nav>
			</footer>
		</div>
	);
}

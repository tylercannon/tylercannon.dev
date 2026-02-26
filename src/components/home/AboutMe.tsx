import { Card, CardContent } from "@/components/ui/card";

const AboutMe = () => {
    return (
        <div className="flex flex-col items-center text-center gap-6">
            <h1 className="text-white text-2xl md:text-3xl text-balance leading-tight">Tyler Cannon</h1>
            <p className="text-neon-green text-lg md:text-xl text-balance leading-tight">Senior Software Engineer</p>
            <Card className="max-w-md bg-white/5 backdrop-blur-xl border border-neon-green/50 rounded-2xl">
                <CardContent>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Passionate about building high-performance, scalable, and maintainable software. Constantly
                        learning and adapting to new technologies to solve complex problems.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

export default AboutMe;

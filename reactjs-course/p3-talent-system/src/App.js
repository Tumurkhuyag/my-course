import "./App.css";
import { Checkbox } from "./components/ui/checkbox";
import { Badge } from "./components/ui/badge";
import { Progress } from "./components/ui/progress";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { UserCheck, Linkedin, Chrome, Google } from "lucide-react";
import { Separator } from "./components/ui/separator";

function App() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white manrope-uniquifier">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-center">
            <div className="h-3 w-3 bg-red-500 mr-2"></div>
            <p className="text-sm text-red-500">Sign up as a Applicant</p>
          </div>
          <h1 className="text-3xl text-center font-bold">
            Personal information
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <Badge className="bg-red-100 text-red-500">1/3</Badge>
          <Progress value={0.3} className="w-full h-1" />
          <Button size="icon" className="size-8 rounded-full w-11">
            <UserCheck className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="w-full gap-2">
            <Chrome className="h-4 w-4" />
            Google
          </Button>
          <Button variant="outline" className="w-full gap-2">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Button>
        </div>

        <div>
          <div className="bg-white w-11 absolute m-auto left-0 right-0">
            <div className="text-gray-400 text-sm text-center">or</div>
          </div>
          <Separator className="inline-block align-middle" />
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First name</Label>
            <Input id="first-name" placeholder="First name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" placeholder="Last name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" placeholder="name@company.com" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country of residence</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mongolia">Mongolia</SelectItem>
                {/* Add more countries as needed */}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile</Label>
            <Input id="mobile" placeholder="Mobile number" type="tel" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-normal leading-5 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            I agree with the Terms and Conditions and the Privacy and Policy
          </label>
        </div>

        <Button className="w-full">Save and continue</Button>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <a href="#" className="text-primary hover:underline">
            Sign in here
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;

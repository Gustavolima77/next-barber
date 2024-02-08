import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BokingItem = () => {
  return (
    <Card>
      <CardContent className="p-5 flex justify-between py-0">
        <div className="flex flex-col gap-2 py-5">
          <Badge className="bg-[#221C30] text-primary hove:bg[#221C30] w-fit">
            Confirmado
          </Badge>
          <h2 className="font-bold">Corte de cabelo</h2>

          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png" />

              <AvatarFallback>G</AvatarFallback>
            </Avatar>

            <h3 className="text-sm"> Vintage Barber</h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-3 border-l border-solid border-secondary">
          <p className="text-sm">setembro</p>
          <p className="text-2xl">23</p>
          <p className="text-sm">14:05</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BokingItem;
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
function ReviewSection() {
  // TODO: Carousel or invis list for all reviews
  return (
    <div>
      <Carousel orientation="horizontal">
        <CarouselContent>
          <CarouselItem />
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
export default ReviewSection;

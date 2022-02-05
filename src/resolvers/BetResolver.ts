import { Bet, BetInput, GetBestBetOutput } from "../models/Bet";
import { BetService } from "../services/BetService";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class BetResolver {
  @Query(() => Bet, { nullable: true })
  async getBet(@Arg("id") id: number): Promise<Bet | null> {
    return BetService.getBet(id);
  }

  @Query(() => [Bet])
  async getBetList(): Promise<Bet[]> {
    return BetService.getBetList();
  }

  @Mutation(() => Bet)
  async createBet(@Arg("bet") bet: BetInput): Promise<Bet> {
    return BetService.createBet(bet);
  }

  @Query(() => [GetBestBetOutput])
  async getBestBetPerUser(
    @Arg("limit", { nullable: true }) limit: number = 100
  ): Promise<GetBestBetOutput[]> {
    return BetService.getBestBetPerUser(limit);
  }
}

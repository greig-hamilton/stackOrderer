/* On the Vista map we display expanded stacks. This TDD example is to replicate the algorithm
 * that orders the stack members. Each stack member can be connected to 0-2 neighbour members.
 * The ordering attempts to put the lowest ID at the top of the expanded stack while ensuring
 * that a chain or ring is formed. This means the links between members are always to their
 * closest neighbours on the map. Additionally provisioned members with no neighbours are always
 * shown below a chain or ring stack. Below are some examples to help understand the ordering.
 * The output below is the expected order to be shown on the map.
 *
 *  Only provisioned members
 *   1
 *   2
 *   4
 *
 *  Basic chain stack in numerical order
 *   1
 *   |
 *   2
 *   |
 *   3
 *   |
 *   7
 *
 *  Chain stack with the node with the lowest ID and only one neighbour at the top
 *   5
 *   |
 *   1
 *   |
 *   8
 *
 *  Chain stack with provisioned nodes. Provisioned nodes are always below a linked stack and are in numerical order
 *   4
 *   |
 *   6
 *
 *   1
 *   2
 *
 *  Ring stack with the lowest ID at the top and then the next lowest neighbour ID below
 *   1-
 *   | |
 *   2 |
 *   | |
 *   3-
 *
 *  Ring stack and provisioned nodes with the lowest ID at the top and then the next lowest neighbour ID below.
 *  Note neighbour 6 is lower than neighbour 8.
 *   2-
 *   | |
 *   6 |
 *   | |
 *   3 |
 *   | |
 *   8-
 *
 *   1
 *   3
 *   4
 *   6
 *
 * Use TDD to develop the code.
 */

export interface StackMemberAndNeighbourIds {
    stackId: number;
    neighbours: number[];
}

export class StackOrderer {
    /* Takes an array of members. Return the stack IDs in the order they should be shown.
     * The first ID is the top member and the last ID is the bottom member.
     */
    public getStackMemberOrder(members: StackMemberAndNeighbourIds[]): number[] {
        return [1];
    }
}

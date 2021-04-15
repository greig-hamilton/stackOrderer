import { expect } from 'chai';
import { StackOrderer, StackMemberAndNeighbourIds } from './stackOrderer';

describe('StackOrderer', () => {
    it('Should return the correct order for a stack', () => {
        const stackOrderer = new StackOrderer();
        const stackMembers: StackMemberAndNeighbourIds[] = [{ stackId: 1, neighbours: [] }];
        expect(stackOrderer.getStackMemberOrder(stackMembers)).to.be.deep.eq([1]);
    });

    it('Should correctly order a basic chain stack (example 2)', () => {
        const stackOrderer = new StackOrderer();
        const stackMembers: StackMemberAndNeighbourIds[] = [
            { stackId: 1, neighbours: [2, 7] },
            { stackId: 2, neighbours: [1, 3] },
            { stackId: 3, neighbours: [2, 7] },
            { stackId: 7, neighbours: [1, 3] },
        ];
        expect(stackOrderer.getStackMemberOrder(stackMembers)).to.be.deep.eq([1, 2, 3, 7]);
    });
});

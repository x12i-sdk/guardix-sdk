import assert from 'node:assert/strict';
import { generateAgentKey, signProof, verifyProof } from '@x12i/guardix-sdk';

const keys = await generateAgentKey();
const message = new TextEncoder().encode('A local proof fixture');
const signature = await signProof(keys.privateKey, message);
assert.equal(await verifyProof(keys.publicKey, message, signature), true);
assert.equal(await verifyProof(keys.publicKey, new TextEncoder().encode('Changed fixture'), signature), false);
console.log('Local agent proof verification passed.');
// This does not enroll an agent. Keys and signatures are not printed or saved.

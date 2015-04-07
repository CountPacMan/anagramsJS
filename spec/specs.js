describe('findAnagrams', function() {
  it("matches one letter anagrams with eachother", function() {
    expect(findAnagrams("z", ["z"])).to.deep.equal(["z"]);
  });

  it("matches one letter anagrams with eachother regardless of case", function() {
    expect(findAnagrams("Z", ["z"])).to.deep.equal(["z"]);
  });

  it("matches multiple letter anagrams with eachother regardless of case", function() {
    expect(findAnagrams("below", ["elbow", "biscuit"])).to.deep.equal(["elbow"]);
  });

  it("matches multiple letter anagrams to multiple anagrams regardless of case", function() {
    expect(findAnagrams("acres", ["cares", "biscuit", "races", "scare", "not"])).to.deep.equal(["cares", "races", "scare"]);
  });

  it("matches multiple letter anagrams with eachother regardless of case using partial matches", function() {
    expect(findAnagrams("belo", ["elbow", "biscuit"])).to.deep.equal(["elbow"]);
  });

  it("matches multiple letter anagrams with eachother regardless of case using partial matches and does not return reverse partial matches", function() {
    expect(findAnagrams("below", ["elbo", "biscuit"])).to.deep.equal([]);
  });

});

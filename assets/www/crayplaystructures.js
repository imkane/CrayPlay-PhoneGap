var PlayerCollection=function()
{
	this.count=0;
	this.collection={};

	this.add=function(key, name)
	{
		if(this.collection[key]!=undefined)
			return undefined;
		this.collection[key] = {
								p_id:key,
								p_name: name
								};			
		return ++this.count;
	}
	this.get_collection=function(){
		return this.collection;
	}
	this.remove=function(key)
	{
		 if(this.collection[key]==undefined)
			return undefined;
		 delete this.collection[key]
		 return --this.count;
	}
	
	this.item=function(key)
	{
	 	return this.collection[key];
	}
	
	this.grabFirstPlayer=function()
	{
		var firstKey = 0;
		for(key in this.collection) 
		{
			firstKey = key;
			break;
		}
		if(this.collection[firstKey]==undefined)
		return undefined;
			
		return this.collection[firstKey];
	}
	
	this.grabSecondPlayer=function()
	{
		var secondKey = 0;
		var counter= 0;
		for(key in this.collection) 
		{
			secondKey = key;
			counter++;
			if(counter == 2)
			break;
		}
		if(this.collection[secondKey]==undefined)
		return undefined;
			
		return this.collection[secondKey];
	}
	
	this.forEach=function(block)
	{
		for(key in this.collection) 
		{
			if(this.collection.hasOwnProperty(key))
			{
				block(key, this.collection[key].p_name);
			}
		}
	 }
}

var RoundPlayerCollection=function()
{
	this.count=0;
	this.collection={};
	this.submit_count = 0;
	this.all_submitted = false;
	this.dummyplayer={
					  p_id: 0, 
					  p_name: "Dummy"
					  }
	this.empty=function()
	{
		if(this.count > 0)
		{
			for(key in this.collection) 
			{
			 	delete this.collection[key];
			}
		}
		this.count = 0;
	}
	
	this.resetPlayers=function(currentReaderID)
	{
		if(this.count > 0)
		{
			for(key in this.collection) 
			{
			 	delete this.collection[key];
			}
		}
		this.count = 0;
		
		for(key in currentAllPlayers.get_collection())
		{
			if(currentReaderID != key)
			{
				if(this.collection[key]!=undefined)
					return undefined;
				
				//alert(currentAllPlayers.item(key).p_name);
				
				this.collection[key] =	{
						p_id: key,
						p_name: currentAllPlayers.item(key).p_name,
						submitted_ind: false
				};			
				this.count++;	
			}
		}
		
		this.all_submitted = false;
		this.submit_count = 0;
		
		return this.count;
	}
	
	this.remove=function(key)
	{
		 if(this.collection[key]==undefined)
			return undefined;
		 delete this.collection[key];
		 return --this.count;
	}
	
	this.item=function(key)
	{
	 	return this.collection[key];
	}
	
	this.grabNextPlayer=function(){
		if( this.count > 0)
		{
			for(key in this.collection)
			{
				if(this.all_submitted == true)
				return this.dummyplayer;
				
				if(this.collection[key].submitted_ind == false )
				break;
			}
			return this.collection[key];
		}
		else
		{
			return undefined;
		}

	}
	
	this.playerSubmitted=function(key, indicator){
		if (indicator == true)
		{
			this.collection[key].submitted_ind = true;
			this.submit_count++;
			if(this.submit_count == this.count)
				this.all_submitted = true; 
		}
		else
		{
			this.collection[key].submitted_ind = false;
			this.submit_count--;
		}
		return this.submit_count;
	}
	
	this.checkAllSubmitted=function(){
		return this.all_submitted;
	}
	this.forEach=function(block)
	{
		for(key in this.collection) 
		{
			if(this.collection.hasOwnProperty(key))
			{
				block(key, this.collection[key]);
			}
		}
	 }
}

var WordCollection=function()
{
	this.count=0;
	this.collection={};

	this.add=function(key, w_type, w_text, w_realdef, u_ind)
	{
		if(this.collection[key]!=undefined)
			return undefined;
			
		this.collection[key] =	{
									word_id: key,
									word_type: w_type,
									word_text: w_text,
									word_realdef: w_realdef,
									used_ind: u_ind
								};
		return ++this.count;
	}

	this.remove=function(key)
	{
		 if(this.collection[key]==undefined)
			return undefined;
		 delete this.collection[key];
		 return --this.count;
	}
	
	this.item=function(key)
	{
	 	return this.collection[key];
	}
	
	this.forEach=function(block)
	{
		for(key in this.collection) 
		{
			if(this.collection.hasOwnProperty(key))
			{
				block(key, this.collection[key].word_text, this.collection[key].word_realdef, this.collection[key].used_ind);
			}
		}
	}
}

var DefinitionCollection=function()
{
	this.count=0;
	this.collection={};

	this.add=function(key, d_type, d_text, u_ind)
	{
		if(this.collection[key]!=undefined)
			return undefined;
			
		this.collection[key] =	{
									def_id: key,
									def_type: d_type,
									def_text: d_text,
									used_ind: u_ind
								};
		return ++this.count;
	}

	this.remove=function(key)
	{
		 if(this.collection[key]==undefined)
			return undefined;
		 delete this.collection[key];
		 return --this.count;
	}
	
	this.item=function(key)
	{
	 	return this.collection[key];
	}

	this.forEach=function(block)
	{
		for(key in this.collection) 
		{
			if(this.collection.hasOwnProperty(key))
			{
				block(key, this.collection[key].def_text, this.collection[key].used_ind);
			}
		}
	 }
}

var PlayerAnswerCollection=function()
{
	this.count=0;
	this.collection={};

	this.add=function(key, w_id, p_id, r_id, g_id, d_v_count, d_rank )
	{
		if(this.collection[key]!=undefined)
			return undefined;
			
		this.collection[key] =	{
									def_id: key,
									word_id: w_id,
									player_id: p_id,
									round_id: r_id,
									game_id: g_id,
									def_vote_count: d_v_count,
									def_rank: d_rank
								};
		return ++this.count;
	}

	this.remove=function(key)
	{
		 if(this.collection[key]==undefined)
			return undefined;
		 delete this.collection[key];
		 return --this.count;
	}
	
	this.item=function(key)
	{
	 	return this.collection[key];
	}
	
	this.setRank=function(key, rank)
	{
		if(this.collection[key]!=undefined)
		return undefined;
			
	 	this.collection[key].def_rank = rank;
		
		return this.collection[key].def_rank;
	}
	
	this.forEach=function(block)
	{
		for(key in this.collection) 
		{
			if(this.collection.hasOwnProperty(key))
			{
				block(key, this.collection[key].word_id, this.collection[key].player_id, this.collection[key].round_id, this.collection[key].def_vote_count, 
				this.collection[key].def_rank);
			}
		}
	}
}
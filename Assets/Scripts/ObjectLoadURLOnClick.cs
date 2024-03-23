using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;

public class ObjectLoadURLOnClick : MonoBehaviour {

	[SerializeField]
	private string id;

	[DllImport("__Internal")]
    private static extern void onClick(string str);

	private void OnMouseDown()
	{
		onClick(id);
		// if(urlToCall != null) Application.OpenURL(urlToCall);
	}
}

using UnityEngine;
using System.Runtime.InteropServices;

[RequireComponent(typeof(Outline))]
public class ActivatableOutline : MonoBehaviour
{
  [SerializeField]
  private string id;
  private Outline myOutlineScript;
  
  [DllImport("__Internal")]
  private static extern void onHoverIn(string str);
  [DllImport("__Internal")]
  private static extern void onHoverOut(string str);

  private void Awake()
  {
    myOutlineScript = GetComponent<Outline>();
    myOutlineScript.enabled = false;
  }
  void OnMouseOver()
  {
    //If your mouse hovers over the GameObject with the script attached, output this message
    if(!myOutlineScript.enabled){
      onHoverIn(id);
    }
    myOutlineScript.enabled = true;
  }

  void OnMouseExit()
  {
    //The mouse is no longer hovering over the GameObject so output this message each frame
    if(myOutlineScript.enabled){
      onHoverOut(id);
    }
    myOutlineScript.enabled = false;
  }
}
